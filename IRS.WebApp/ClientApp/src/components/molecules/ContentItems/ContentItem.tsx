import React from 'react'
import { Grid, Typography } from '@mui/material'
// @ts-expect-error
import s from './ContentItem.module.css'
import { textColors, textFontSizes } from '../../../constants/textConstants'
import { IContent } from '../../../datas/content'
import { DefaultLink } from '../../atoms/Links/DefaultLink'

export const ContentItem: React.FC<IContent> = ({ headerText, text, link, img, direction, linkOnFiltered }) => {
  return (
        <>
            <Grid container spacing={3} direction={direction} alignItems={'center'} justifyContent={'space-around'}>
                <Grid item xs={6}>
                    <div className={s.centerImage}>
                        <DefaultLink link={linkOnFiltered}>
                            <img src={img}/>
                        </DefaultLink>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={2} direction={'column'}>
                        <Grid item xs={4}>
                            <DefaultLink link={linkOnFiltered}>
                                <Typography variant={'h2'} color={textColors.main}>{headerText}</Typography>
                            </DefaultLink>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography color={textColors.sub} fontSize={textFontSizes.sub}>{text}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <DefaultLink link={link}>
                                <Typography color={textColors.link}>Подробнее</Typography>
                            </DefaultLink>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
  )
}
