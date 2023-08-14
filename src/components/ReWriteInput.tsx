import React, { ChangeEventHandler } from 'react'
import style from './custom.module.css'
import { SERVER_IP } from '@/utils/store'

type TextInputProps = {
  value: string
  onChange: ChangeEventHandler<HTMLTextAreaElement>
  placeholder?: string
  row?: number
  onClick:() => void
}

const ReWriteInput = ({value,onChange, placeholder, row=3, onClick }:TextInputProps) => {
  return (
    <div className={style.rewriteContainer}>
      <textarea
        className={style.rewrite_area} 
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        rows={row}
      />
      <button className={style.rewrite_button} onClick={() => onClick()}>반영하기</button>
    </div>
  )
}

export default ReWriteInput
