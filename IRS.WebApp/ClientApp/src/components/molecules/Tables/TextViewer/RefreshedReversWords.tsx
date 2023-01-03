import React, { useEffect, useState } from 'react'
import { AsyncButtonMain } from '../../../atoms/Buttons'
import { getRandomReversTextFx } from '../../../../store/Admin/texts.store'
import { TextViewer } from './TextViewer'
import { IText } from '../../../../models/Admin/reversWords.model'
import { reversTextChance } from '../../../../utils/reversWords'

export const RefreshedReversWords: React.FC = () => {
  const [text, setText] = useState<IText>()

  const getText = async (): Promise<void> => {
    const data = await getRandomReversTextFx(text?.id)

    data.text = reversTextChance(50, data.text)
    setText(data)
  }

  useEffect(() => {
    void getText()
  }, [])

  return (
        <>
            <AsyncButtonMain onClick={getText}>Обновить</AsyncButtonMain>
            <TextViewer text={text?.text} />
        </>
  )
}
