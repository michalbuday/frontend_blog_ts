import { NextPage } from "next"
import { fetchAPI } from "../../lib/api"
import { ArticleType } from "../../lib/types"
import ArticlePage, { ArticleProps } from "../../components/articlePage"


const Article:NextPage<ArticleProps> = ({ article, categories }) => {
    return (
        <ArticlePage article={article} categories={categories} />
    )
}

export async function getStaticPaths() {
    const articlesRes = await fetchAPI("/articles", { fields: ["slug"] });
  
    return {
      paths: articlesRes.data.map((article: ArticleType) => ({
        params: {
          slug: article.attributes.slug,
        },
      })),
      fallback: false,
    }
  }
  
  export async function getStaticProps({ params }:any) {
    const articlesRes = await fetchAPI("/articles", {
      filters: {
        slug: params.slug,
      },
      populate: ["image", "category", "author.picture"],
    })
    const categoriesRes = await fetchAPI("/categories")
  
    return {
      props: { article: articlesRes.data[0], categories: categoriesRes.data },
      revalidate: 1,
    }
  }

  export default Article
