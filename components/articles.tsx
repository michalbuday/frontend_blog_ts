import React from 'react'
import { articleType } from '../lib/types'
import ArticleCard from './articleCard'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

interface articlesInterface {
    articles: Array<articleType>
}

const Articles:React.FC<articlesInterface> = ({ articles }) => {
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
