import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
// @ts-expect-error
import s from './Links.module.scss'
import { ButtonBase } from '@mui/material'

export interface INavLink {
  link: string
  children: string
}

export const NavLink: React.FC<INavLink> = ({ link, children }) => {
  const resolved = useResolvedPath(link)
  const math = useMatch({ path: resolved.pathname, end: true })
  const style = (math != null) ? s.navLinkActive : s.navLink

  return (
      <>
        <Link to={link} className={style}>
            <ButtonBase style={{ fontSize: '20px' }}>{children}</ButtonBase>
        </Link>
      </>
  )
}
