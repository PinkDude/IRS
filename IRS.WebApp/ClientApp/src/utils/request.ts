import authService from '../components/api-authorization/AuthorizeService'
import axios from 'axios'

export interface IRequestProp {
  url: string
}

export async function request<Type> ({ url }: IRequestProp): Promise<Type> {
  const token = await authService.getAccessToken()
  const response = await axios.get<Type>(url, {
    headers: (token == null)
      ? {}
      : {
          Authorization: `Bearer ${token}`
        }
  })
  return response.data
}

export interface IRequestPostProp {
  url: string
  data: any
}

export async function requestPost<Type> ({ url, data }: IRequestPostProp): Promise<Type> {
  const token = await authService.getAccessToken()
  const response = await axios.post<Type>(url, data, {
    headers: (token == null)
      ? {}
      : {
          Authorization: `Bearer ${token}`
        }
  })
  return response.data
}

export async function requestDelete<Type> ({ url }: IRequestProp): Promise<Type> {
  const token = await authService.getAccessToken()
  const response = await axios.delete<Type>(url, {
    headers: (token == null)
      ? {}
      : {
          Authorization: `Bearer ${token}`
        }
  })
  return response.data
}
