import { getStrapiURL } from "./api";
import { mediaType } from "./types"

export function getStrapiMedia(media: mediaType): string {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}
