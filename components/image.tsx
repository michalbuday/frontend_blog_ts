import React from 'react'
import NextImage from 'next/image'
import { getStrapiMedia } from '../lib/media'
import { MediaType } from '../lib/types'

interface Image {
    image: MediaType,
    width?: number | string,
    height?: number | string,
    layout?: "fixed" | "fill" | "intrinsic" | "responsive" | "raw" | undefined
}

const CustomImage:React.FC<Image> = ({ image, width, height, layout }) => {
    return (
        <NextImage
            layout={layout}
            src={getStrapiMedia(image) || ''}
            alt={image.data?.attributes.alternativeText}
            width={width || '100%'}
            height={height || '100%'}
        />
    )
}

export default CustomImage;
