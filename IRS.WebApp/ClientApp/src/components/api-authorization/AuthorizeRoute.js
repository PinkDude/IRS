import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import { ApplicationPaths, QueryParameterNames } from './ApiAuthorizationConstants'
import authService from './AuthorizeService'

export default class AuthorizeRoute extends Component {
  constructor (props) {
    super(props)

    this.state = {
      ready: false,
      authenticated: false
    }
  }

  componentDidMount () {
    this._subscription = authService.subscribe(() => this.authenticationChanged())
    this.populateAuthenticationState()
  }

  componentWillUnmount () {
    authService.unsubscribe(this._subscription)
  }

  render () {
    const { ready, authenticated } = this.state
    const link = document.createElement('a')
    // eslint-disable-next-line react/prop-types
    link.href = this.props.path
    const returnUrl = `${link.protocol}//${link.host}${link.pathname}${link.search}${link.hash}`
    const redirectUrl = `${ApplicationPaths.Login}?${QueryParameterNames.ReturnUrl}=${encodeURIComponent(returnUrl)}`
    if (!ready) {
      return <div></div>
    } else {
      // eslint-disable-next-line react/prop-types
      const { element } = this.props
      return authenticated ? element : <Navigate replace to={redirectUrl} />
    }
  }

  async populateAuthenticationState () {
    const authenticated = await authService.isAuthenticated()
    this.setState({ ready: true, authenticated })
  }

  async authenticationChanged () {
    this.setState({ ready: false, authenticated: false })
    await this.populateAuthenticationState()
  }
}
