export type contactType = {
   address: String,
   contact_email: String,
   phone: String,
   title: String,
}
 
export type defaultSeoType = {
    metaDescription: String,
    metaTitle: String,
    shareImage: Object,
}
 
export type faviconType = {
    data: {
        attributes: {
            alternativeText: String,
            caption: String,
            createdAt: String,
            ext: String,
            formats: Object,
            hash: String,
            height: Number,
            mime: String,
            name: String,
            previewUrl: String | null,
            provider: String,
            provider_metadata: String | null,
            size: Number,
            updatedAt: String,
            url: String,
            width: Number,
        }
    }
}
 
export type globalContextType = {
    contact: contactType,
    defaultSeo: defaultSeoType,
    favicon: faviconType,
    siteName: String,
}

export type mediaType = {
    data: {
      attributes: {
        url: string,
        alternativeText: String | null
      }
    }
}

export type Category = {
    id: string,
    attributes: {
        slug: string,
        name: string
    }
}
