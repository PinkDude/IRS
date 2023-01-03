import { ButtonMain } from '../../../atoms/Buttons'
import { ClinTable } from './ClinTable'
import React, { useState } from 'react'
import { generateClinNumbers } from '../../../../utils/generateNumbers'
const lineCount = 10
const maxValue = 10

export const RefreshedClinTable: React.FC = () => {
  const [lines, setLines] = useState<Array<[number, number]>>(generateClinNumbers(lineCount, maxValue))

  const generateLines = (): void => {
    setLines(generateClinNumbers(lineCount, maxValue))
  }

  return (
        <>
            <ButtonMain onClick={generateLines}>Обновить</ButtonMain>
            <ClinTable numbers={lines} maxLineCount={10} />
        </>
  )
}
