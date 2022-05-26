import React from 'react'
import NextImage from 'next/image'
import { getStrapiMedia } from '../lib/media'
import { mediaType } from '../lib/types'

interface Image {
    image: mediaType,
    width?: number | string,
    height?: number | string,
    layout?: "fixed" | "fill" | "intrinsic" | "responsive" | "raw" | undefined
}

const CustomImage:React.FC<Image> = ({ image, width, height, layout }) => {
    const { alternativeText,  } = image.data.attributes;

    return (
        <NextImage
            layout={layout}
            src={getStrapiMedia(image)}
            alt={alternativeText || undefined}
            width={width || '100%'}
            height={height || '100%'}
        />
    )
}

export default CustomImage;
