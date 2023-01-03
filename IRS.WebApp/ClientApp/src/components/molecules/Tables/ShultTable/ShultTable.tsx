import React from 'react'
import { getShulIndexes } from '../../../../utils/generateNumbers'
// @ts-expect-error
import s from './shultTable.module.css'
import { Typography } from '@mui/material'
import { textColors } from '../../../../constants/textConstants'

export interface IShultTableProps {
  numbers: number[]
  fontSize?: string
}

export const ShultTable: React.FC<IShultTableProps> = ({ numbers, fontSize = '24px' }) => {
  const table = getShulIndexes(numbers.length)
  let index = 1

  return (
    <div className={s.container}>
        <table className={s.tableShult}>
            <tbody>
                {table.map((row) =>
                    <tr key={index++}>
                        {
                            row.map((number) =>
                            <td className={s.tdShult} key={index++}>
                                <Typography color={textColors.main} fontSize={fontSize}>{numbers[number]}</Typography>
                            </td>)
                        }
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}
