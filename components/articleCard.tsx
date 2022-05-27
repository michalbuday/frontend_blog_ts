import React from 'react'
import Link from 'next/link'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button';

import { articleType } from '../lib/types'
import { getStrapiMedia } from '../lib/media'

interface cardInterface {
    article: articleType
}

const ArticleCard:React.FC<cardInterface> = ({ article }) => {
    return (
        <React.Fragment>
            <Card sx={{ margin: '20px 0px', width: { md: '480px'}}}>
                <CardMedia
                    component='img'
                    height='140'
                    src={getStrapiMedia(article.attributes.image)}
                    alt={article.attributes.image.data.attributes.alternativeText}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{article.attributes.title}</Typography>
                    <Typography variant="body2">
                        {article.attributes.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link href={`/article/${article.attributes.slug}`}>
                        <Button size='small'>Zistit viac</Button>
                    </Link>
                </CardActions>
            </Card>
        </React.Fragment>
    )
}

export default ArticleCard
