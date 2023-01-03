import React, { useState } from 'react'
import { ButtonMain } from '../../../atoms/Buttons'
import { ShultTable } from './ShultTable'
import { generateOrderedArray } from '../../../../utils/generateNumbers'

const start = 1
const end = 25

export const RefreshedShultTable: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>(generateOrderedArray(start, end))

  const regenerate = (): void => {
    setNumbers(generateOrderedArray(start, end))
  }

  return (
        <>
            <ButtonMain onClick={regenerate}>Обновить</ButtonMain>
            <ShultTable numbers={numbers} />
        </>
  )
}
