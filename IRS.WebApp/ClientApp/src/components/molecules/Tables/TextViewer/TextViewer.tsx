import React from 'react'
import { Typography } from '@mui/material'
import { textColors } from '../../../../constants/textConstants'

export interface IReversWordsProps {
  text?: string
  fontSize?: number
}

export const TextViewer: React.FC<IReversWordsProps> = ({ text, fontSize = '16' }) => {
  return (
        <div style={{ padding: '20px', margin: '20px 0px', borderRadius: '8px', border: '1px solid #C43E94' }}>
            <Typography
                color={textColors.main}
                fontSize={fontSize.toString() + 'px'}
                >
                {text}
            </Typography>
        </div>
  )
}
