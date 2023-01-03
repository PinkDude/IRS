import React, { useEffect, useState } from 'react'
import { ButtonMain } from '../../atoms/Buttons'
import { ShultTable } from '../../molecules/Tables/ShultTable/ShultTable'
import { generateOrderedArray } from '../../../utils/generateNumbers'

import { Grid } from '@mui/material'

import { Input } from '../../atoms/Inputs'

export const FilteringShultTable: React.FC = () => {
  const [start, setStart] = useState<number>(1)
  const [end, setEnd] = useState<number>(25)
  const [step, setStep] = useState<number>(1)
  const generate = (): number[] => { return generateOrderedArray(Number(start), Number(end), Number(step)) }
  const [numbers, setNumbers] = useState<number[]>(generate())
  const [fontSize, setFontSize] = useState<number>(24)

  const regenerate = (): void => {
    setNumbers(generate())
  }

  useEffect(() => {
    setNumbers(generate())
  }, [start, end, step])

  return (
        <>
            <Grid
                container
                spacing={5}
                paddingBottom={'40px'}
                alignItems={'center'}
            >
                <Grid item xs={4}>
                    <Input
                        type={'number'}
                        value={start}
                        label={'Начальное число'}
                        onChange={setStart}
                        InputProps={{
                          inputProps: {
                            min: 1
                          }
                        }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Input
                        type={'number'}
                        value={step}
                        label={'Шаг увеличения числа'}
                        onChange={setStep}
                        InputProps={{
                          inputProps: {
                            min: 1
                          }
                        }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Input
                        type={'number'}
                        value={end}
                        label={'Конечное число'}
                        onChange={setEnd}
                        InputProps={{
                          inputProps: {
                            min: 1
                          }
                        }}
                    />
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
                    <ButtonMain onClick={regenerate}>Обновить</ButtonMain>
                </Grid>
            </Grid>
            <ShultTable numbers={numbers} fontSize={fontSize.toString() + 'px'}/>
        </>
  )
}
