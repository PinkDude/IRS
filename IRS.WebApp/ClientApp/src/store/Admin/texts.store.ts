import {
  CREATE_REVERS_WORD_TEXT,
  CREATE_SHORTHAND_WORD_TEXT,
  ADMIN_TEXT_CONTROLLER,
  GET_RANDOM_REVERS, GET_RANDOM_SHORTHAND
} from '../../constants/Admin/urls'
import { CreateReverseText, DeleteText, GetReversTexts, IText } from '../../models/Admin/reversWords.model'
import { createEffect } from 'effector'
import { request, requestDelete, requestPost } from '../../utils/request'

export const createReversTextFx = createEffect<CreateReverseText, Promise<void>>(async (data) => {
  await requestPost({ url: CREATE_REVERS_WORD_TEXT, data })
})

export const createShorthandTextFx = createEffect<CreateReverseText, Promise<void>>(async (data) => {
  await requestPost({ url: CREATE_SHORTHAND_WORD_TEXT, data })
})

export const reversTextsPageSize: number = 10

export const getReversTextsFx = createEffect<GetReversTexts, IText[]>(async ({ page = 1 }) => {
  const skip = (page - 1) * reversTextsPageSize
  const url = `${ADMIN_TEXT_CONTROLLER}?skip=${skip.toString()}&take=${reversTextsPageSize.toString()}`
  return await request<IText[]>({ url })
})

export const shorthandTextsPageSize: number = 10

export const getShorthandTextsFx = createEffect<GetReversTexts, IText[]>(async ({ page = 1 }) => {
  const skip = (page - 1) * reversTextsPageSize
  const url = `${ADMIN_TEXT_CONTROLLER}?skip=${skip.toString()}&take=${shorthandTextsPageSize.toString()}&IsShorthand=true`
  return await request<IText[]>({ url })
})

export const deleteTextsFx = createEffect<DeleteText, Promise<void>>(async ({ id }) => {
  const url = `${ADMIN_TEXT_CONTROLLER}/${id}`
  return await requestDelete({ url })
})

export const getRandomReversTextFx = createEffect(async (id?: string) => {
  const url = `${GET_RANDOM_REVERS}?exclusionId=${id ?? ''}`
  return await request<IText>({ url })
})

export const getRandomShorthandTextFx = createEffect(async (id?: string) => {
  const url = `${GET_RANDOM_SHORTHAND}?exclusionId=${id ?? ''}`
  return await request<IText>({ url })
})
