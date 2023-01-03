import React from 'react'
import { Grid, IconButton, List, ListItem, Typography } from '@mui/material'
import { textColors } from '../../../../constants/textConstants'
import DeleteIcon from '@mui/icons-material/Delete'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { IText } from '../../../../models/Admin/reversWords.model'

export interface ITextsTableProps {
  texts: IText[]
  page: number
  deleteText: (text: IText) => Promise<void>
  loadPage: (page: number) => Promise<void>
  hasMore: boolean
}

export const TextsTable: React.FC<ITextsTableProps> = ({ texts, page, deleteText, loadPage, hasMore }) => {
  return (
      <Grid container spacing={2} direction={'column'}>
          <Grid item>
        <List>
            {texts.map((text) => (
                <ListItem
                    key={text.id}
                    secondaryAction={
                        <IconButton onClick={() => { void (async () => { await deleteText(text) })() }}>
                            <DeleteIcon style={{ color: 'white' }}/>
                        </IconButton>
                    }
                >
                    <Typography color={textColors.main}>{text.text}</Typography>
                </ListItem>
            ))}
        </List>
          </Grid>
          <Grid item>
              <Grid container direction={'row'} alignItems={'center'} justifyContent={'center'}>
                <Grid item>
                    {
                        page > 1 &&
                        <IconButton onClick={() => {
                          void (async () => {
                            await loadPage(page - 1)
                          })()
                        }}>
                            <ArrowBackIosIcon style={{ color: 'white' }}/>
                        </IconButton>
                    }
                </Grid>
                <Grid item>
                  <Typography color={textColors.main}>{page}</Typography>
                </Grid>
                <Grid item>
                    {
                        hasMore &&
                        <IconButton onClick={() => {
                          void (async () => {
                            await loadPage(page + 1)
                          })()
                        }}>
                            <ArrowForwardIosIcon style={{ color: 'white' }}/>
                        </IconButton>
                    }
                </Grid>
              </Grid>
          </Grid>
      </Grid>
  )
}
