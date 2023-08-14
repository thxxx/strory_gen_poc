import React, { ChangeEvent, ChangeEventHandler } from 'react'
import style from './custom.module.css'

type TextInputProps = {
  value: string
  onChange: ChangeEventHandler<HTMLTextAreaElement>
  placeholder?: string
  row?: number
}

const TextInput = ({
  value,
  onChange,
  placeholder,
  row = 8,
}: TextInputProps) => {
  return (
    <textarea
      className={style.textarea}
      value={value}
      onChange={(e) => onChange(e)}
      placeholder={placeholder}
      rows={row}
    ></textarea>
  )
}

export default TextInput
