import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client';
import PreviewSuspense from '../../components/PreviewSuspense';
import PreviewBlogList from '../../components/PreviewBlogList';
import { FC } from 'react';
import BlogList from '../../components/BlogList';

export const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

const SuspenseLoader: FC = () => {
  return (
    <div role='status'>
      <p className='text-center text-lg animate-pulse text-[#F09819]'>Loading Preview Data...</p>
    </div>
  );
};

export default async function Home() {
  const isPreviewMode = previewData();
  if (isPreviewMode) {
    return (
      <PreviewSuspense fallback={<SuspenseLoader />}>
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  return <BlogList posts={posts} />;
}
