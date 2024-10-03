import { print, type DocumentNode } from 'graphql';

const { DATOCMS_URL, DATOCMS_API_KEY } = import.meta.env;

export const get = async (query: DocumentNode, variables = {}) => {
  const response = await fetch(DATOCMS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${DATOCMS_API_KEY}`,
    },
    body: JSON.stringify({
      query: print(query),
      variables
    })
  });
  const { data } = await response.json();

  return data;
}
