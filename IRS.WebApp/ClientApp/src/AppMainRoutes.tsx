import { useRoutes } from 'react-router-dom'
import AppRoutes from './AppRoutes'

import React from 'react'
import { Container } from 'reactstrap'

export const AppMainRoutes: React.FC = () => {
  const routes = useRoutes(AppRoutes)

  return (
        <Container>
            {routes}
        </Container>
  )
}
