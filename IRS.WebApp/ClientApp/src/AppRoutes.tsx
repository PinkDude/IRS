import React from 'react'
import { Main } from './components/organisms/Main'
import { DetailInfo } from './components/organisms/DetailInfo/DetailInfo'
import { clinContent, reversContent, shorthandContent, shultContent } from './datas/content'
import { FilteringClinTable } from './components/molecules/Tables'
import { FilteringShultTable } from './components/molecules/Tables/ShultTable'
import { RouteObject } from 'react-router-dom'
import { App } from './App'
import { AdminApp } from './AdminApp'
import { ReversWords } from './components/organisms/Admin'
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute'
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes'
import { ShorthandTexts } from './components/organisms/Admin/ShorthandTexts/ShorthandTexts'
import { FilteringReversText } from './components/organisms'

export const AppRoutes: RouteObject[] = [
  {
    element: <App />,
    path: '/',
    children: [
      {
        index: true,
        element: <Main />
      },
      {
        path: clinContent.link,
        element: <DetailInfo {...clinContent} />
      },
      {
        path: clinContent.linkOnFiltered,
        element: <FilteringClinTable />
      },
      {
        path: shultContent.link,
        element: <DetailInfo {...shultContent} />
      },
      {
        path: shultContent.linkOnFiltered,
        element: <FilteringShultTable />
      },
      {
        path: reversContent.link,
        element: <DetailInfo {...reversContent} />
      },
      {
        path: reversContent.linkOnFiltered,
        element: <FilteringReversText />
      },
      {
        path: shorthandContent.link,
        element: <DetailInfo {...shorthandContent} />
      }
    ]
  },
  {
    element: <AuthorizeRoute element={<AdminApp />} />,
    path: 'admin',
    children: [
      {
        path: 'revers-words',
        element: <ReversWords/>
      },
      {
        path: '/admin/speed-reading-texts',
        element: <ShorthandTexts/>
      }
    ]
  },
  ...ApiAuthorizationRoutes
]

export default AppRoutes
