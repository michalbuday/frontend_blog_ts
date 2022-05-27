import React from 'react'
import { NextPage } from 'next'
import Layout from '../../components/layout'
import Articles from '../../components/articles'
import Typography from '@mui/material/Typography'

import { fetchAPI } from '../../lib/api'
import { categoryType } from '../../lib/types'

interface categoryProps {
    category: categoryType,
    categories: Array<categoryType>
}

const Category:NextPage<categoryProps> = ({ category, categories }) => {
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

export async function getStaticPaths() {
    const categoriesRes = await fetchAPI("/categories", { fields: ["slug"] });
  
    return {
      paths: categoriesRes.data.map((category: categoryType) => ({
        params: {
          slug: category.attributes.slug,
        },
      })),
      fallback: false,
    };
  }
  
  export async function getStaticProps({ params }:any) {
    const matchingCategories = await fetchAPI("/categories", {
      filters: { slug: params.slug },
      populate: {
        articles: {
          populate: "*",
        },
      },
    });
    const allCategories = await fetchAPI("/categories");
  
    return {
      props: {
        category: matchingCategories.data[0],
        categories: allCategories.data,
      },
      revalidate: 1,
    };
  }
  
  export default Category;
