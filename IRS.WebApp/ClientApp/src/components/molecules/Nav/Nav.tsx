import React from 'react'
import { List, ListItemButton, ListItemText } from '@mui/material'
import { DefaultLink } from '../../atoms/Links/DefaultLink'
import { textColors } from '../../../constants/textConstants'

export interface INavItem {
  name: string
  link: string
}

export interface INavProp {
  items: INavItem[]
}

export const Nav: React.FC<INavProp> = ({ items }) => {
  return (
        <>
            <List>
                {items.map(({ name, link }) => (
                    <ListItemButton key={name} >
                        <DefaultLink link={link} color={textColors.main}>
                            <ListItemText
                                primary={name}
                            />
                        </DefaultLink>
                    </ListItemButton>
                ))}
            </List>
        </>
  )
}
