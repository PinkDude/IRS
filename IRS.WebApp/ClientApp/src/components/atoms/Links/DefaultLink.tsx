import React from 'react'
import { Link } from 'react-router-dom'

export interface IDefaultLinkProps {
  link?: string
  children: React.ReactNode
  color?: string
}

export const DefaultLink: React.FC<IDefaultLinkProps> = ({ link, children, color }) => {
  return (
        <>
            {(link != null)
              ? <Link to={link} style={{ textDecoration: 'none', color }}>
                    {children}
                </Link>
              : <div>{ children }</div>
            }
        </>
  )
}
