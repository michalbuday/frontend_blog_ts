import { NextPage } from 'next';
import { fetchAPI } from '../lib/api';
import HomePage, { HomeProps } from '../components/homePage'

const Home: NextPage<HomeProps> = ({categories, homepage}) => {
  return (
    <HomePage categories={categories} homepage={homepage} />
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
