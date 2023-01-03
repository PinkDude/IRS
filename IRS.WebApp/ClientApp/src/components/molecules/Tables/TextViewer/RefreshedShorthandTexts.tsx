import React, { useEffect, useState } from 'react'
import { IText } from '../../../../models/Admin/reversWords.model'
import { getRandomShorthandTextFx } from '../../../../store/Admin/texts.store'
import { AsyncButtonMain } from '../../../atoms/Buttons'
import { TextViewer } from './TextViewer'

export const RefreshedShorthandTexts: React.FC = () => {
  const [text, setText] = useState<IText>()

  const getText = async (): Promise<void> => {
    const data = await getRandomShorthandTextFx(text?.id)
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
