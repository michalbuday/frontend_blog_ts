import React from 'react'
import Layout from './layout'
import Articles from './articles'
import Typography from '@mui/material/Typography'
import { CategoryType } from '../lib/types'

export interface CategoryProps {
    category: CategoryType,
    categories: Array<CategoryType>
}

const CategoryPage:React.FC<CategoryProps> = ({ category, categories }) => {
    return (
        <Layout categories={categories}>
            <Typography 
                variant='h3'
                textAlign='center'
                marginTop='20px'
                textTransform= 'uppercase'
                >
                {category.attributes.name}
            </Typography>
            <Articles articles={category.attributes.articles.data}/>
        </Layout>
    )
}

export default CategoryPage
