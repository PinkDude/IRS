export interface CreateReverseText {
  text: string
}

export interface DeleteText {
  id: string
}

export interface GetReversTexts {
  page: number
}

export interface IText {
  id: string
  text: string
  created: Date
}
