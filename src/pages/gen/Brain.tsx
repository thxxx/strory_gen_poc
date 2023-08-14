import React, { useState } from 'react'
import style from './engine.module.css'
import TextInput from '@/components/TextInput'
import { KeywordsType, keywords } from '@/utils/keywords'
import { SELECT_COLOR, useContentStore } from '@/utils/store'
import TitleContainer from '@/components/TitleContainer'

const Brain = () => {
  const { brainDump, chosenKeywords, setChosenKeywords, setBrainDump } =
    useContentStore()
  const [index, setIndex] = useState<number>(0)

  const clickKeyword = (word: KeywordsType) => {
    if (chosenKeywords?.includes(word)) {
      const filtered = chosenKeywords.filter((doc) => doc !== word)
      setChosenKeywords([...filtered])
    } else {
      setChosenKeywords([...chosenKeywords, word])
    }
  }

  return (
    <div className={style.gen_card}>
      <div className={style.inner}>
        <p>모든 생각을 적는 곳</p>
        <TextInput
          row={19}
          value={brainDump}
          onChange={(e) => setBrainDump(e.currentTarget.value)}
          placeholder='이야기에 관해서 머릿속에 떠오르는 모든 것들을 적어보세요. 의식의 흐름대로 적어도 되고 문장이 아니어도 괜찮습니다.'
        />
      </div>
      <div className={style.inner}>
        <p>선택한 키워드 ( 클릭해서 삭제 )</p>
        <div>
          {chosenKeywords?.map((item) => {
            return (
              <div
                className={style.tag}
                onClick={() => clickKeyword(item)}
                style={{ background: SELECT_COLOR }}
              >
                {item.text}
              </div>
            )
          })}
        </div>

        <TitleContainer
          title='이야기에 사용하고 싶은 모든 키워드들을 선택하세요.'
          buttonText='다른 키워드 찾기'
          onClick={() => {
            if (index === 5) {
              setIndex(0)
            } else {
              setIndex(index + 1)
            }
            console.log(keywords.length)
          }}
        />
        <div className={style.keywordTable}>
          {keywords.slice(index * 55, (index + 1) * 55).map((item) => {
            return (
              <div
                className={style.tag}
                onClick={() => clickKeyword(item)}
                style={{
                  background: `${
                    chosenKeywords.includes(item) ? SELECT_COLOR : 'white'
                  }`,
                }}
              >
                {item.text}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Brain
