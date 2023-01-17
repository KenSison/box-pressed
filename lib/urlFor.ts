import { client } from './sanity.client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  const result = builder.image(source);
  return result;
}

export default urlFor;
