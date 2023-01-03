import React, { Dispatch, SetStateAction } from 'react'
import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
// @ts-expect-error

import classes from './Inputs.module.scss'

export interface InputProps {
  placeholder?: string
  value: any
  label?: string
  onChange: Dispatch<SetStateAction<any>>
  type?: React.InputHTMLAttributes<unknown>['type']
  rows?: number
  multiline?: boolean
  InputProps?: {}
}

const CssTextField = styled(TextField)({
  '& label': {
    color: 'white'
  },
  '& label.Mui-focused': {
    color: '#C43E94'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#C43E94'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white'
    },
    '&:hover fieldset': {
      borderColor: 'white'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#C43E94'
    }
  }
})

export const Input: React.FC<InputProps> = (props) => {
  const handler = (event: any): void => {
    props.onChange(event.target.value)
  }

  return (
        <>
            <CssTextField
                className={classes.textField}
                {...props}
                onChange={handler}
            />
        </>
  )
}
