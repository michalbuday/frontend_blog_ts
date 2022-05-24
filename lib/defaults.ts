import { globalContextType } from "./types"

export const globalContextDefaultValues:globalContextType = {
    contact: {
        address: '',
        contact_email: '',
        phone: '',
        title: '',
    },
    defaultSeo: {
        metaDescription: '',
        metaTitle: '',
        shareImage: {},
    },
    favicon: {
        data: {
            attributes: {
                alternativeText: '',
                caption: '',
                createdAt: '',
                ext: '',
                formats: '',
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
