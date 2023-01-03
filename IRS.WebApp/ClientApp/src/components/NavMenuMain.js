import React, { Component } from 'react'
import s from './NavMenu.module.css'
import { Ellipse } from './atoms/Other'
import { NavLink } from './atoms/Links'
import { clinContent, reversContent, shorthandContent, shultContent } from '../datas/content'
import { Grid } from '@mui/material'

export class NavMenuMain extends Component {
  static displayName = NavMenuMain.name

  constructor (props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true
    }
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render () {
    return (
      <header className={s.header}>
        <nav>
          <Grid container spacing={2}>
            <Grid item>
              <NavLink link={'/'}>Главная</NavLink>
            </Grid>
            <Grid item>
              <NavLink link={clinContent.link}>{clinContent.headerText}</NavLink>
            </Grid>
            <Grid item>
              <NavLink link={shultContent.link}>{shultContent.headerText}</NavLink>
            </Grid>
            <Grid item>
              <NavLink link={reversContent.link}>{reversContent.headerText}</NavLink>
            </Grid>
            <Grid item>
              <NavLink link={shorthandContent.link}>{shorthandContent.headerText}</NavLink>
            </Grid>
          </Grid>
        </nav>
        <Ellipse type={'ellipseTop'}/>
        {/* <Grid container spacing={2} direction={'row-reverse'}> */}
        {/*  <Grid item> */}
        {/*    <ButtonMain onClick={() => { */}
        {/*      window.location.href = '/' */}
        {/*    }}> */}
        {/*      Главная */}
        {/*    </ButtonMain> */}
        {/*  </Grid> */}
        {/* </Grid> */}
      </header>
    )
  }
}
