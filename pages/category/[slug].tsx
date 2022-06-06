import { NextPage } from 'next'
import { fetchAPI } from '../../lib/api'
import { CategoryType } from '../../lib/types'
import CategoryPage, { CategoryProps } from '../../components/categoryPage'


const Category:NextPage<CategoryProps> = ({ category, categories }) => {
    return (
        <CategoryPage category={category} categories={categories} />
    )
}

export async function getStaticPaths() {
    const categoriesRes = await fetchAPI("/categories", { fields: ["slug"] });
  
    return {
      paths: categoriesRes.data.map((category: CategoryType) => ({
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
  
  export default Category
