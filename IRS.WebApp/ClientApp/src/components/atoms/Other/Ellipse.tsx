import React from 'react'
// @ts-expect-error
import s from './Ellipse.module.css'

export type TEllipseType = 'ellipseTop' | 'ellipseBottom'

export interface IEllipseInput {
  type: TEllipseType
}

export const Ellipse: React.FC<IEllipseInput> = ({ type }) => {
  return (
        <div className={s[type]} ></div>
  )
}
