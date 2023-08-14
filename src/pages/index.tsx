'use client'

import React from 'react'
import { useState } from 'react'
import style from './generate.module.css'
import Link from 'next/link'

export default function Home() {
  const [inputText, setInputText] = useState<string>('')

  const onSubmit = async () => {
    setInputText('')
  }

  //   const gg = async () => {
  //     console.log('click!')

  //     const body = {
  //       title: '--3',
  //       desc: '--2',
  //       type: '--1',
  //     }
  //     const response = await axios.post(SERVER_IP + '/gen', body)

  //     console.log(response)
  //   }

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
        <h2>스토리 기획 어시스턴트</h2>
        <div>
          <Link href='/gen'>
            <button className={style.button} onClick={() => onSubmit()}>
              스토리를 만들고 싶어요.
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
