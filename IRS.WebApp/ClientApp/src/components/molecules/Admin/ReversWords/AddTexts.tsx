import React, { useState } from 'react'
import { Grid } from '@mui/material'
import { Input } from '../../../atoms/Inputs'
import { AsyncButtonMain } from '../../../atoms/Buttons'

export interface IAddTextsProps {
  addHandle: (text: string) => Promise<void>
}

export const AddTexts: React.FC<IAddTextsProps> = ({ addHandle }) => {
  const [text, setText] = useState<string>('')

  return (
        <>
            <Grid container spacing={2} alignItems={'center'} color={'white'}>
                <Grid item xs={10}>
                    <Input
                        value={text}
                        onChange={setText}
                        label={'Новый текст'}
                        multiline
                        rows={3}
                    />
                </Grid>
                <Grid item xs={2}>
                    <AsyncButtonMain onClick={async () => await addHandle(text)}>Создать</AsyncButtonMain>
                </Grid>
            </Grid>
        </>
  )
}
