import React from 'react'
import { ContentItem } from '../../molecules/ContentItems'
import { clinContent, reversContent, shorthandContent, shultContent } from '../../../datas/content'
import { Grid } from '@mui/material'

export const Main: React.FC = () => {
  return (
        <Grid container direction={'column'} spacing={15}>
            <Grid item>
                <ContentItem {...clinContent} />
            </Grid>
            <Grid item>
                <ContentItem {...shultContent} />
            </Grid>
            <Grid item>
                <ContentItem {...reversContent} />
            </Grid>
            <Grid item>
                <ContentItem {...shorthandContent} />
            </Grid>
        </Grid>
  )
}
