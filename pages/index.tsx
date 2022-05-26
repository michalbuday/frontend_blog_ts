import { NextPage } from 'next';
import { fetchAPI } from '../lib/api';
import { Category } from '../lib/types'
import Layout from '../components/layout';
import Typography from '@mui/material/Typography';
import Seo from '../components/seo';
import SectionContainer from '../components/sectionContainer'
import { sectionType } from '../lib/types'

interface PageProps {
  categories: Array<Category>
  homepage: {
    attributes: {
      seo: Object
      hero: {
        title: string
      }
      homepageSection: Array<sectionType>
    }
  }
};

const Home: NextPage<PageProps> = ( {categories, homepage} ) => {
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

export async function getStaticProps() {
  // Run API calls in parallel
  const [categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
        homepageSection: { populate: "*" }
      },
    }),
  ]);

  return {
    props: {
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Home
