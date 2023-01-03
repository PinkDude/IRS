import React, { useEffect, useState } from 'react'
import { ClinTable } from '../../molecules/Tables/ClinTable/ClinTable'
import { generateClinNumbers } from '../../../utils/generateNumbers'
import { Grid } from '@mui/material'
import { Input } from '../../atoms/Inputs'
import { ButtonMain } from '../../atoms/Buttons'

export const FilteringClinTable: React.FC = () => {
  const [lineCount, setLineCount] = useState<number>(10)
  const [maxValue, setMaxValue] = useState<number>(10)
  const [fontSize, setFontSize] = useState<number>(16)
  const [dotCountStart, setDotCountStart] = useState<number>(3)
  const [dotCountStep, setDotCountStep] = useState<number>(4)
  const [lines, setLines] = useState<Array<[number, number]>>(generateClinNumbers(lineCount, maxValue))

  useEffect(() => {
    setLines(generateClinNumbers(lineCount, maxValue))
  }, [lineCount, maxValue])

  const reload = (): void => {
    setLines(generateClinNumbers(lineCount, maxValue))
  }

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
                        value={lineCount}
                        label={'Количество строк'}
                        onChange={setLineCount}
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
                        value={maxValue}
                        label={'Максимальное число'}
                        onChange={setMaxValue}
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
                <Grid item xs={4}>
                    <Input
                        type={'number'}
                        value={dotCountStart}
                        label={'Начальное количество точек'}
                        onChange={setDotCountStart}
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
                        value={dotCountStep}
                        label={'Шаг количества точек'}
                        onChange={setDotCountStep}
                        InputProps={{
                          inputProps: {
                            min: 1
                          }
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <ButtonMain onClick={reload}>Обновить</ButtonMain>
                </Grid>
            </Grid>
          <ClinTable
              numbers={lines}
              maxLineCount={lineCount}
              fontSize={fontSize.toString() + 'px'}
              dotCountStart={dotCountStart}
              dotCountStep={dotCountStep}
          />
        </>
  )
}
