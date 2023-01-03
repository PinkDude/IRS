import React from 'react'
import { RefreshedClinTable } from './ClinTable'
import { RefreshedShultTable } from './ShultTable/RefreshedShultTable'
import { RefreshedReversWords } from './TextViewer/RefreshedReversWords'
import { RefreshedShorthandTexts } from './TextViewer/RefreshedShorthandTexts'

export type TDemoTable = 'clin' | 'shult' | 'revers' | 'shorthand'

export interface IDemoTableProps {
  demoType: TDemoTable
}

export const DemoTable: React.FC<IDemoTableProps> = ({ demoType }) => {
  const getDemo = (): any => {
    switch (demoType) {
      case 'clin':
        return <RefreshedClinTable/>
      case 'shult':
        return <RefreshedShultTable/>
      case 'revers':
        return <RefreshedReversWords />
      case 'shorthand':
        return <RefreshedShorthandTexts />
      default:
        return null
    }
  }

  return (
        <>
            {getDemo()}
        </>
  )
}
