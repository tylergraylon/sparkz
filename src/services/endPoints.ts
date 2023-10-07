const BASE_URL = "https://api.opensea.io/api/v2";

export const GET_COLLECTIONS = `${BASE_URL}/collections?chain_identifier=ethereum`;

export const GET_COLLECTION = (slug: string) =>
  `${BASE_URL}/collections/${slug}`;

export const GET_COLLECTION_ANALYTICS = (slug: string) =>
  `${BASE_URL}/collections/${slug}/stats`;
