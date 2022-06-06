import React from 'react'
import Layout from '../components/layout'
import Typography from '@mui/material/Typography'
import Seo from '../components/seo'
import SectionContainer from '../components/sectionContainer'
import { SectionType, CategoryType, SeoType } from '../lib/types'

export interface HomeProps {
  categories: Array<CategoryType>
  homepage: {
    attributes: {
      seo: SeoType
      hero: {
        title: string
      }
      homepageSection: Array<SectionType>
    }
  }
};

const HomePage:React.FC<HomeProps> = ({categories, homepage}) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      <Typography 
        variant='h3'
        textAlign='center'
        marginTop='20px'
        >
          {homepage.attributes.hero.title}
      </Typography>
      <SectionContainer sections={homepage.attributes.homepageSection}/>
    </Layout>
  )
}

export default HomePage
