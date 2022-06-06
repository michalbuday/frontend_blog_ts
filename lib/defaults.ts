import { GlobalContextType, WindowType } from "./types"

export const globalContextDefaultValues:GlobalContextType = {
    contact: {
        address: '',
        contact_email: '',
        phone: '',
        title: '',
    },
    defaultSeo: {
        metaDescription: '',
        metaTitle: '',
        shareImage: { 
            data: {
              attributes: {
                url: '',
                alternativeText: '',
                width: '',
                height: 0,
              }
          }
        },
        article: false,
    },
    favicon: {
        data: {
            attributes: {
                alternativeText: '',
                caption: '',
                createdAt: '',
                ext: '',
                formats: {},
                hash: '',
                height: 0,
                mime: '',
                name: '',
                previewUrl: null,
                provider: '',
                provider_metadata: null,
                size: 0,
                updatedAt: '',
                url: '',
                width: 0,
            }
        }
    },
    siteName: 'Marta Jelinkova',
}

export const initialWindowData:WindowType = {
    width: 0,
    height: 0,
  }
