import { getRandomInt } from './getRandomInt'

export const reversTextChance = (chance: number, text?: string): string => {
  if (text === undefined) { return '' }
  const array = text.split(' ')
  const result = array.map((word) => {
    const random = getRandomInt(100)
    if (random <= chance) {
      const wordArray = word.split('')
      return wordArray.reverse().join('')
    }

    return word
  })

  return result.join(' ')
}

export const reversTextNumber = (wordNumber: number, text?: string): string => {
  if (text === undefined) { return '' }
  const array = text.split(' ')
  const result = array.map((word, index) => {
    if ((index + 1) % wordNumber === 0) {
      const wordArray = word.split('')
      return wordArray.reverse().join('')
    }

    return word
  })

  return result.join(' ')
}
