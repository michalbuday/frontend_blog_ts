//This file should contain all type definitions ok||nok?
export type ContactType = {
   address: string,
   contact_email: string,
   phone: string,
   title: String,
}
 
export type SeoType = {
    metaDescription: string,
    metaTitle: string,
    shareImage: MediaType,
    article: boolean | null | undefined,
}
 
export type FaviconType = {
    data: {
        attributes: {
            alternativeText: string,
            caption: string,
            createdAt: string,
            ext: string,
            formats: object,
            hash: string,
            height: number,
            mime: string,
            name: string,
            previewUrl: string | null,
            provider: string,
            provider_metadata: string | null,
            size: number,
            updatedAt: string,
            url: string,
            width: number,
        }
    }
}
 
export type GlobalContextType = {
    contact: ContactType,
    defaultSeo: SeoType,
    favicon: FaviconType,
    siteName: string,
}

export type MediaType = {
    data: {
      attributes: {
        url: string,
        alternativeText: string | undefined
        width: number | string
        height: number
      }
    } | null
}

export type CategoryType = {
    id: string,
    attributes: {
        slug: string,
        name: string,
        articles: {
            data: Array<ArticleType>
        }
    }
}

export type SectionType = {
    title: string,
    description: string,
    image: MediaType
}

export type ArticleType = {
    attributes: {
        slug: string,
        image: MediaType,
        category: {
            data: CategoryType 
        },
        title: string,
        content: string,
        author: AuthorType,
        description: string,
        createdAt: string,
        publishedAt: string,
    }
}

export type AuthorType = {
    data: {
        attributes: {
            email: string,
            name: string,
            picture?: MediaType
        }
    }
}

export type WindowType = {
    width: number,
    height: number,
}
