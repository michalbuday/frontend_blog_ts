import { NextPage } from "next"
import { articleType, categoryType } from "../../lib/types"
import { fetchAPI } from "../../lib/api"
import { getStrapiMedia } from "../../lib/media"
import Container from '@mui/material/Container'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Link from 'next/link'
import ReactMarkdown from "react-markdown"
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Moment from 'react-moment'

interface articleProps {
    article: articleType,
    categories: Array<categoryType>,
}

const Article:NextPage<articleProps> = ({ article, categories }) => {
    const seo = {
      metaTitle: article.attributes.title,
      metaDescription: article.attributes.description,
      shareImage: article.attributes.image,
      article: true,
    }

		// tohle neni vyslovene spatne, ale myslim, ze je dobrej zvyk nezaplacavat return stranek a mit tady minimum markupu - idealne jednu komponentu, neco jako ArticlePage nebo tak neco a tam presunout vse, co mas tady
    return (
        <Layout categories={categories}>
          <Seo seo={seo}/>
          <Container sx={{
            maxWidth: { xs: '100% !important', md: 'xl' }
          }}>
            <Card sx={{margin: {xs:'20px 0px', md:'40px'}}}>
              <CardMedia
                component='img'
                src={getStrapiMedia(article.attributes.image)}
                alt={article.attributes.image.data.attributes.alternativeText}
                height='200'
                />
              <CardContent>
                <Link href={`/category/${article.attributes.category.data.attributes.slug}`}>
                  <Button>
                    {article.attributes.category.data.attributes.name}
                  </Button>
                </Link>
                <Typography
                    variant='h3'
                    textAlign='left'
                    margin='20px 0px'
                    >
                    {article.attributes.title}
                </Typography>
                <Typography>
                  <ReactMarkdown>{article.attributes.content}</ReactMarkdown>
                  {/* markdown sposobuje problemy s rehydrataciou page UI does not mach server,
                   neviem jak sa toho zbavit */}
                </Typography>
                <Box sx={{display: 'flex'}}>
                  {article.attributes.author.data.attributes.picture &&
                  <Avatar
                    sx={{ marginRight: '20px' }}
										{/* Type string | undefined is not assignable to type string  */}
                    alt={article.attributes.author.data.attributes.picture.data.attributes.alternativeText}
                    src={getStrapiMedia(article.attributes.author.data.attributes.picture)}
                  />
                  // te nested data zo strapi su "bozi", chcelo by to upravit
                  }
                  <Box>
                    <Typography>
                      {article.attributes.author.data.attributes.name}
                    </Typography>
                    <Typography>
                      <Moment format="MMM Do YYYY">
                        {article.attributes.publishedAt}
                      </Moment>
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Container>
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
