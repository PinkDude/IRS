import React, { useEffect, useState } from 'react'
import { Checkbox, FormControlLabel, Grid } from '@mui/material'
import { TextViewer } from '../../molecules/Tables/TextViewer'
import { getRandomReversTextFx } from '../../../store/Admin/texts.store'
import { reversTextChance, reversTextNumber } from '../../../utils/reversWords'
import { Input } from '../../atoms/Inputs'
import { AsyncButtonMain } from '../../atoms/Buttons'

export const FilteringReversText: React.FC = () => {
  const [textId, setTextId] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [fontSize, setFontSize] = useState<number>(16)
  const [isChance, setIsChance] = useState<boolean>(true)
  const [chance, setChance] = useState<number>(50)
  const [wordNumber, setWordNumber] = useState<number>(3)

  const getText = async (): Promise<void> => {
    const data = await getRandomReversTextFx(textId)

    setTextId(data.id)
    setText(data.text)
  }

  useEffect(() => {
    void getText()
  }, [])

  const reversedText = isChance ? reversTextChance(chance, text) : reversTextNumber(wordNumber, text)

  return (
        <>
          <Grid
              container
              spacing={5}
              paddingBottom={'40px'}
              alignItems={'center'}
          >
            <Grid item xs={4}>
              <FormControlLabel
                control={
                  <Checkbox
                      defaultChecked
                      value={isChance}
                      onChange={() => setIsChance(!isChance)}
                  />
                }
                label={'Переворачивать слова с шансом'}
                />
            </Grid>
            <Grid item xs={4}>
              {
                isChance
                  ? <Input
                    type={'number'}
                    value={chance}
                    label={'Шанс переворачивания слова'}
                    onChange={setChance}
                    InputProps={{
                      inputProps: {
                        max: 100, min: 1
                      }
                    }}
                    />
                  : <Input
                        type={'number'}
                        value={wordNumber}
                        label={'Номер перевораваемого слова'}
                        onChange={setWordNumber}
                        InputProps={{
                          inputProps: {
                            min: 1
                          }
                        }}
                    />
              }
            </Grid>
            <Grid item xs={4}>
              <Input
                  type={'number'}
                  value={fontSize}
                  label={'Размер текста'}
                  onChange={setFontSize}
                  InputProps={{
                    inputProps: {
                      min: 1
                    }
                  }}
              />
            </Grid>
              <Grid item xs={12}>
                  <AsyncButtonMain onClick={getText}>Обновить</AsyncButtonMain>
              </Grid>
              <Grid item xs={12}>
                  <Input
                      value={text}
                      onChange={setText}
                      label={'Исходный текст'}
                      multiline
                  />
              </Grid>
          </Grid>
          <TextViewer text={reversedText} fontSize={fontSize} />
        </>
  )
}
