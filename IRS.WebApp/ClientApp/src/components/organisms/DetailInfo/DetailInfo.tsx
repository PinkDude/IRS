import React from 'react'
import { Grid, Typography } from '@mui/material'
import { textColors, textFontSizes } from '../../../constants/textConstants'
import { IContent } from '../../../datas/content'
import { DemoTable } from '../../molecules/Tables/DemoTable'
import { ButtonMain } from '../../atoms/Buttons'
import { DefaultLink } from '../../atoms/Links/DefaultLink'

export const DetailInfo: React.FC<IContent> = ({ headerText, text, demoType, linkOnFiltered, fullText }) => {
  return (
        <Grid container direction={'column'} spacing={3}>
            <Grid item>
                <Typography variant={'h4'} color={textColors.main}>{headerText}</Typography>
            </Grid>
            <Grid item>
                <Typography color={textColors.sub} fontSize={textFontSizes.sub}>{text}</Typography>
            </Grid>
            <Grid item>
                <DemoTable demoType={demoType} />
            </Grid>
            {(linkOnFiltered != null) &&
                <Grid item>
                    <DefaultLink link={linkOnFiltered}>
                        <ButtonMain>Опробовать</ButtonMain>
                    </DefaultLink>
                </Grid>
            }
            <Grid item>
                <Typography color={textColors.sub} fontSize={textFontSizes.sub}>{fullText}</Typography>
            </Grid>
        </Grid>
  )
}
