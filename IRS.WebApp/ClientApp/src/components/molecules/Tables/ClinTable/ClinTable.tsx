import React from 'react'
import { Grid, Typography } from '@mui/material'
import { textColors } from '../../../../constants/textConstants'

export interface IClinSettings {
  dotCountStart?: number
  dotCountStep?: number
  fontSize?: string
  numbers: Array<[number, number]>
  maxLineCount?: number
}
export const ClinTable: React.FC<IClinSettings> = ({
  dotCountStart = 3, dotCountStep = 4, fontSize = '16px', numbers, maxLineCount = 5
}) => {
  const drawLine = ([num1, num2]: [number, number], lineNumber: number): string => {
    const dot = '.'
    const dotCount = Number(dotCountStart) + lineNumber * dotCountStep

    const num1Length = String(num1).length
    const num2Length = String(num2).length
    const differenceNumLength = num1Length - num2Length
    let dotCount1: number = dotCount
    let dotCount2: number = dotCount

    if (Number(differenceNumLength) > 0) {
      dotCount1 -= differenceNumLength * 2

      if (dotCount1 < 0) {
        dotCount1 = 1
      }
    } else if (Number(differenceNumLength) < 0) {
      dotCount2 += differenceNumLength * 2

      if (dotCount2 < 0) {
        dotCount2 = 1
      }
    }

    const dotStr1 = dot.repeat(dotCount1)
    const dotStr2 = dot.repeat(dotCount2)
    return `${num1}${dotStr1}${lineNumber + 1}${dotStr2}${num2}`
  }

  return (
        <Grid container direction={'column'} alignItems={'center'}>
          {numbers.map((numbers, index) =>
            index <= maxLineCount &&
              <Grid key={index} item>
                <Typography color={textColors.main} fontSize={fontSize}>
                  {drawLine(numbers, index)}
                </Typography>
              </Grid>
          )}
        </Grid>
  )
}
