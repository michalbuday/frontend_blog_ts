import { NextPage } from 'next';
import { fetchAPI } from '../lib/api';
import { Category } from '../lib/types'
import Layout from '../components/layout';
import Seo from '../components/seo';

interface PageProps {
  categories: Array<Category>
  homepage: {
    attributes: {
      seo: Object
      hero: {
        title: String
      }
      homepageSection: Object
    }
  }
};

const Home: NextPage<PageProps> = ( {categories, homepage} ) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      <h1>{homepage.attributes.hero.title}</h1>
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
