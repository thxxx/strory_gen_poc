import React from 'react'
import style from './custom.module.css'
import { SELECT_COLOR, useContentStore } from '@/utils/store'

type ListTableProps = {
  title: string
  el?: any[]
}

const ListTable = ({ title, el }: ListTableProps) => {
  const { chosenTopic, setChosenTopic } = useContentStore()

  return (
    <div className={style.listTable}>
      <p>{title}</p>
      <div className={style.listInner}>
        {el?.map((item) => {
          return (
            <div
            key={item}
              style={{
                background: `${chosenTopic === item ? SELECT_COLOR : 'white'}`,
                maxWidth: '40vw',
              }}
              className={style.tableElement}
              onClick={() => {
                if (item !== chosenTopic) {
                  setChosenTopic(item)
                } else {
                  setChosenTopic('')
                }
              }}
            >
              {item}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListTable
