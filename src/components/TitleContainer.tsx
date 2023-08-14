import React from 'react'
import style from './custom.module.css'

type TitleProps = {
  title: string
  buttonText?: string
  onClick?: () => void
  seeNudge?: () => void
}

const TitleContainer = ({
  title = '',
  buttonText = '생성',
  onClick,
  seeNudge,
}: TitleProps) => {
  return (
    <div className={style.titleContainer}>
      <p className={style.title}>{title}</p>
      <div>
        {
          onClick &&
            <button className={style.reset_button} onClick={() => onClick()}>
              {buttonText}
            </button>
        }
        {seeNudge && (
          <button className={style.reset_button} onClick={() => seeNudge()}>
            질문/넛지 보기
          </button>
        )}
      </div>
    </div>
  )
}

export default React.memo(TitleContainer)
