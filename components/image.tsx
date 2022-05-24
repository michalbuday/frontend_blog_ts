import React from 'react'
import Image from 'mui-image'
import { getStrapiMedia } from '../lib/media'
import { mediaType } from '../lib/types'

interface Image {
    image: mediaType,
    width?: String,
    heigth?: String,
}

const CustomImage:React.FC<Image> = ({ image, width, heigth }) => {
    const { alternativeText } = image.data.attributes;

    return (
        <Image 
            src={getStrapiMedia(image)}
            alt={alternativeText || ""}
            width={width || '100%'}
            heigth={heigth || '100%'}
        />
    )
}

export default CustomImage;
