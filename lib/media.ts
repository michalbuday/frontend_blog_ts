import { getStrapiURL } from "./api";
import { MediaType } from "./types"

export function getStrapiMedia(media: MediaType): string | undefined {
  const url = media.data?.attributes.url;
  const imageUrl = url?.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}
