import React, { Dispatch, SetStateAction } from 'react'
import style from './custom.module.css'
import ReWriteInput from './ReWriteInput'

type SectionProps = {
  text: string
  content: string
  prompt: string
  setPrompt: (prompt: string) => void
  setContent: (prompt: string) => void
  onClick: () => void
  seeNudge: () => void // 질문/넛지 보기
}

const SectionTemplate = ({
  text,
  content,
  prompt,
  seeNudge,
  setContent,
  setPrompt,
  onClick,
}: SectionProps) => {
  return (
    <div className={style.section}>
      <div className={style.titleContainer}>
        <p>{text}</p>
        <button className={style.reset_button} onClick={() => seeNudge()}>
          질문/넛지 보기
        </button>
      </div>
      <textarea
        className={style.sectionTextarea}
        rows={6}
        value={content}
        onChange={(e) => setContent(e.currentTarget.value)}
      />
      {/* <ReWriteInput
        value={prompt}
        onChange={(e) => setPrompt(e.currentTarget.value)}
        onClick={onClick}
      /> */}
    </div>
  )
}

export default SectionTemplate
