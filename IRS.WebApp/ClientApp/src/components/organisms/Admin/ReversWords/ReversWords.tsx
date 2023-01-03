import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { AddTexts, TextsTable } from '../../../molecules/Admin'
import { CreateReverseText, IText } from '../../../../models/Admin/reversWords.model'
import {
  createReversTextFx,
  deleteTextsFx,
  getReversTextsFx,
  reversTextsPageSize
} from '../../../../store/Admin/texts.store'

export const ReversWords: React.FC = () => {
  const [texts, setTexts] = useState<IText[]>([])
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [page, setPage] = useState<number>(1)

  const deleteText = async (text: IText): Promise<void> => {
    await deleteTextsFx({ id: text.id })

    const index = texts.indexOf(text)
    const subArray = [...texts]
    subArray.splice(index, 1)
    setTexts(subArray)

    await loadPage(page)
  }

  const loadPage = async (pageNumber: number): Promise<void> => {
    if (pageNumber < 1) { return }

    if (!hasMore && pageNumber > page) { return }

    const data = await getReversTextsFx({ page: pageNumber })
    if (data.length >= reversTextsPageSize) {
      setHasMore(true)
    } else {
      setHasMore(false)
    }

    setPage(pageNumber)
    setTexts(data)
  }

  const add = async (text: string): Promise<void> => {
    const data: CreateReverseText = { text }
    await createReversTextFx(data)
    await loadPage(page)
  }

  useEffect(() => {
    void loadPage(1)
  }, [])

  return (
        <>
          <Grid container direction={'column'} spacing={3}>
            <Grid item>
                <AddTexts addHandle={add}/>
            </Grid>
              <Grid item>
                  <TextsTable
                      texts={texts}
                      page={page}
                      deleteText={deleteText}
                      loadPage={loadPage}
                      hasMore={hasMore}
                  />
              </Grid>
          </Grid>
        </>
  )
}
