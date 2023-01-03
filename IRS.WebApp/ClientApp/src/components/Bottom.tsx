import React from 'react'
import { Ellipse } from './atoms/Other'
// @ts-expect-error
import s from './NavMenu.module.css'

export const Bottom: React.FC = () => {
  return (
        <div className={s.bottomEllipse}>
            <Ellipse type={'ellipseBottom'}/>
        </div>
  )
}
