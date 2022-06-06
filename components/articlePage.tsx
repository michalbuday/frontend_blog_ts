import React from 'react'
import { getStrapiMedia } from "../lib/media"
import Container from '@mui/material/Container'
import Layout from './layout'
import Seo from './seo'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Link from 'next/link'
import ReactMarkdown from "react-markdown"
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Moment from 'react-moment'
import { ArticleType, CategoryType } from "../lib/types"

export interface ArticleProps {
    article: ArticleType,
    categories: Array<CategoryType>,
}

const ArticlePage:React.FC<ArticleProps>  = ({ article, categories }) => {
    const seo = {
      metaTitle: article.attributes.title,
      metaDescription: article.attributes.description,
      shareImage: article.attributes.image,
      article: true,
    }
 
    return (
        <Layout categories={categories}>
          <Seo seo={seo}/>
          <Container sx={{
            maxWidth: { xs: '100% !important', md: 'xl' }
          }}>
            <Card sx={{margin: {xs:'20px 0px', md:'40px'}}}>
              <CardMedia
                component='img'
                src={getStrapiMedia(article.attributes.image)}
                alt={article.attributes.image.data?.attributes.alternativeText}
                height='200'
                />
              <CardContent>
                <Link href={`/category/${article.attributes.category.data.attributes.slug}`}>
                  <Button>
                    {article.attributes.category.data.attributes.name}
                  </Button>
                </Link>
                <Typography 
                    variant='h3'
                    textAlign='left'
                    margin='20px 0px'
                    >
                    {article.attributes.title}
                </Typography>
                {/* <Typography>
                    <ReactMarkdown>{article.attributes.content}</ReactMarkdown>
                </Typography> */}
                <ReactMarkdown>{article.attributes.content}</ReactMarkdown>
                {/* pridat styly k react markdown, <p> cannot appear as a descendant of <p>, teda nemoze byt obaleny v typography */}
                <Box sx={{display: 'flex'}}>
                  {article.attributes.author.data.attributes.picture && 
                  <Avatar
                    sx={{ marginRight: '20px' }}
                    alt={article.attributes.author.data.attributes.picture.data?.attributes.alternativeText}
                    src={getStrapiMedia(article.attributes.author.data.attributes.picture)}
                  />
                  // te nested data zo strapi su "bozi", chcelo by to upravit
                  } 
                  <Box>
                    <Typography>
                      {article.attributes.author.data.attributes.name}
                    </Typography>
                    <Typography>
                      <Moment format="MMM Do YYYY">
                        {article.attributes.publishedAt}
                      </Moment>
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Container>  
        </Layout>
    )
}

export default ArticlePage
