import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { NavMenuMain } from './NavMenuMain'
import { Bottom } from './Bottom'
import s from './NavMenu.module.css'

export class Layout extends Component {
  static displayName = Layout.name

  render () {
    return (
      <div>
        <NavMenuMain />
        <Container className={s.content}>
            {/* eslint-disable-next-line react/prop-types */}
          {this.props.children}
        </Container>
          <Bottom />
      </div>
    )
  }
}
