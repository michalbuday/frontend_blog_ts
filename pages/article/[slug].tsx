import { NextPage } from "next"
import { articleType, categoryType } from "../../lib/types"
import { fetchAPI } from "../../lib/api"
import Layout from '../../components/layout'
import Typography from '@mui/material/Typography'

interface articleProps {
    article: articleType,
    categories: Array<categoryType>,
}

const Article:NextPage<articleProps> = ({ article, categories }) => {
    return (
        <Layout categories={categories}>
            <Typography 
                variant='h3'
                textAlign='center'
                marginTop='20px'
                >
                {article.attributes.title}
            </Typography>
        </Layout>
    )
}

export async function getStaticPaths() {
    const articlesRes = await fetchAPI("/articles", { fields: ["slug"] });
  
    return {
      paths: articlesRes.data.map((article: articleType) => ({
        params: {
          slug: article.attributes.slug,
        },
      })),
      fallback: false,
    };
  }
  
  export async function getStaticProps({ params }:any) {
    const articlesRes = await fetchAPI("/articles", {
      filters: {
        slug: params.slug,
      },
      populate: ["image", "category", "author.picture"],
    });
    const categoriesRes = await fetchAPI("/categories");
  
    return {
      props: { article: articlesRes.data[0], categories: categoriesRes.data },
      revalidate: 1,
    };
  }

  export default Article
