'use client'

import React from 'react'
import { useState } from 'react'
import style from './generate.module.css'
import { SERVER_IP } from '@/utils/store'
import axios from 'axios'
import { FICTION } from '@/utils/utils'

export default function Home() {
  const [inputText, setInputText] = useState<string>(FICTION)
  const [chat, setChat] = useState<string>('')
  const [chatResponse, setChatResponse] = useState<string>('')
  const [chatHistory, setChatHistory] = useState<string[]>([])
  const [nudges, setNudges] = useState<string>('넛지1, 넛지2')

  const onSubmit = async () => {
    setInputText('')
  }

  const sendChat = async () => {
    console.log("chat", chat)
    if(chat.length<2) return

    const body = {chat:chat, text:inputText, chatHistory:chatHistory}

    const response = await axios.post(SERVER_IP + '/chat', body)
    console.log("response", response.data)

    setChatHistory([...chatHistory, chat, response.data.response])

    setChatResponse("사용여부 : "+response.data.use_or_not+"\n\n"+response.data.response)
  }

  const getNudge = async () => {
    const body = {chat:chat, text:inputText}

    const response = await axios.post(SERVER_IP + '/nudge', body)
    console.log("response", response.data)

    setNudges(response.data.response)
  }

  const getAfter = async () => {
    const body = {chat:chat, text:inputText}

    const response = await axios.post(SERVER_IP + '/gen', body)
    console.log("response", response.data)

    setInputText(inputText+response.data.response)
  }
  
  const nextThreeSentences = async () => {
    const body = {chat:chat, text:inputText}

    const response = await axios.post(SERVER_IP + '/next', body)
    console.log("response", response.data)

    setInputText(inputText+response.data.response)
  }

  return (
    <main className={style.main}>
      <div className={style.main_left}>
        <textarea
          className={style.editor}
          placeholder='Write something...'
          value={inputText}
          onChange={(e) => setInputText(e.currentTarget.value)}
        />
        {/* <Generate blocks={blocks} setBlocks={setBlocks} title={title} chapterTitle={chapterTitle} nextSummary={nextSummary} /> */}
      </div>
      <div className={style.main_right}>
        <div>
          <h2>스토리 기획 어시스턴트</h2>
          <>
            <textarea value={chat} onChange={e => setChat(e.currentTarget.value)} />
            <button onClick={() => sendChat()}>채팅 보내기</button>
            <button onClick={() => getAfter()}>뒷 내용 생성 보내기</button>
          </>
          <div>
            {chatResponse && <p>{chatResponse}</p>}
          </div>
        </div>
        <div>
          {nudges && <p>{nudges}</p>}
          <button onClick={() => nextThreeSentences()}>다음 3줄 생성</button>
          <button onClick={() => getNudge()}>넛지받기</button>
        </div>
      </div>
    </main>
  )
}
