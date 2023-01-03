import React from 'react'
import { Layout } from './components/Layout'
import './custom.css'
import { Outlet } from 'react-router-dom'

export const App: React.FC = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
