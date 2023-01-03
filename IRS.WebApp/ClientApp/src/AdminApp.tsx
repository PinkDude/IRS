import React from 'react'
import { Grid } from '@mui/material'
import { INavItem, Nav } from './components/molecules/Nav/Nav'
import { Outlet } from 'react-router-dom'
import { NavMenu } from './components/NavMenu'

const items: INavItem[] = [
  {
    name: 'Перевернутые слова',
    link: '/admin/revers-words'
  },
  {
    name: 'Тексты скорочтения',
    link: '/admin/speed-reading-texts'
  }
]

export const AdminApp: React.FC = () => {
  return (
        <div style={{ margin: '20px 0px' }}>
          <NavMenu />
          <Grid container>
            <Grid item xs={2}>
              <Nav items={items}/>
            </Grid>
            <Grid item xs={10}>
              <Outlet />
            </Grid>
          </Grid>
        </div>
  )
}
