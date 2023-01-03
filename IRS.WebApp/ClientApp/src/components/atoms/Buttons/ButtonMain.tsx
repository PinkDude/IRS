import React from 'react'
// @ts-expect-error
import s from './Buttons.module.css'
import { ButtonBase } from '@mui/material'

export interface IButtonMainProps {
  onClick?: () => void
  children: string
}

export const ButtonMain: React.FC<IButtonMainProps> = ({ onClick, children }) => {
  return (
        <ButtonBase onClick={onClick} className={s.main}>
            {children}
        </ButtonBase>
  )
}

export interface IAsyncButtonMainProps {
  onClick?: () => Promise<void>
  children: string
}

export const AsyncButtonMain: React.FC<IAsyncButtonMainProps> = ({ onClick, children }) => {
  return (
        <ButtonBase onClick={onClick} className={s.main}>
            {children}
        </ButtonBase>
  )
}
