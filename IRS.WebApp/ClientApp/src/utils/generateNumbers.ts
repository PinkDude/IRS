import { getRandomInt } from './getRandomInt'

export const generateClinNumbers = (count: number, maxValue: number = 100): Array<[number, number]> => {
  const array = new Array<[number, number]>()

  for (let i = 0; i < count; i++) {
    const first = getRandomInt(maxValue)
    const second = getRandomInt(maxValue)
    array.push([first, second])
  }

  return array
}

export const generateOrderedArray = (start: number = 1, end: number = 25, step: number = 1): number[] => {
  const array = []
  for (let i = start; i <= end; i += step) {
    array.push(i)
  }

  return array
}

export const getShulIndexes = (length: number): number[][] => {
  const rowLength = Math.floor(Math.sqrt(length))
  const available = generateOrderedArray(0, length - 1)
  const table: number[][] = []
  const middle = Math.floor(rowLength / 2)

  table[middle] = []
  table[middle][middle] = available[0]
  available.splice(0, 1)

  for (let i = 0; i < rowLength; i++) {
    if (i !== middle) {
      table[i] = []
    }
    for (let j = 0; j < rowLength; j++) {
      if (i === middle && j === middle) { continue }
      const chosenIndex = getRandomInt(available.length)
      table[i][j] = available[chosenIndex]
      available.splice(chosenIndex, 1)
    }
  }

  return table
}
