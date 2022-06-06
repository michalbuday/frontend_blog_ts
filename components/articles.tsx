import React from 'react'
import { ArticleType } from '../lib/types'
import ArticleCard from './articleCard'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

interface ArticlesInterface {
    articles: Array<ArticleType>
}

const Articles:React.FC<ArticlesInterface> = ({ articles }) => {
    return (
        <React.Fragment>
            <Container maxWidth='xl' sx={{  display:'flex', justifyContent: 'center' }}>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                {articles.map((article, i)=>{
                    return (
                        <div key={i}>
                            <ArticleCard article={article}/>
                        </div>
                    )
                })}
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default Articles
