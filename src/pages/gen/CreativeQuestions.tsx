import React, { useState } from 'react'
import style from './engine.module.css'

const CreativeQuestions = () => {
  const [prompt, setPrompt] = useState<string>('')

  const generate = async () => {}

  return <div className={style.questionContainer}></div>
}

export default CreativeQuestions
