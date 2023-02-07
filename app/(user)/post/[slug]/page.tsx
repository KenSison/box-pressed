import { groq } from 'next-sanity';
import { client } from '../../../../lib/sanity.client';
import urlFor from '../../../../lib/urlFor';
import Image from 'next/image';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import { RichTextComponents } from '../../../../components/RichTextComponents';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 30;

export async function generateStaticParams() {
  const query = groq`*[_type=="post"]{
    slug
  }`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

export default async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
      ...,
      author->,
      categories[]->
    }
  `;

  const post: Post = await client.fetch(query, { slug });
  const { _createdAt, title, mainImage, author, description, categories } = post;
  return (
    <article className='px-10 pb-28'>
      <section className='space-y-2 border border-[#F09819] text-white'>
        <div className='relative min-h-56 flex flex-col md:flex-row justify-between '>
          <div className='absolute top-0 w-full h-ull opacity-10 blur-sm p-10'>
            <Image
              className='object-cover object-center mx-auto'
              src={urlFor(mainImage).url()}
              alt={author.name}
              fill
            />
          </div>

          <section className='p-5 bg-[#F09819] w-full'>
            <div className='flex flex-col md:flex-row justify-between gap-y-5'>
              <div>
                <h1 className='text-4xl font-extrabold'>{title}</h1>
                <p>
                  {new Date(_createdAt).toLocaleDateString('ja', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
              <div className='flex items-center space-x-2'>
                <Image
                  className='rounded-full'
                  src={urlFor(author.image).url()}
                  alt={author.name}
                  height={40}
                  width={40}
                />
                <div className='w-64'>
                  <h3 className='text-lg font-bold'>{author.name}</h3>
                  <div>{/* TODO: Author Bio */}</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className='italic pt-10'>{description}</h2>
              <div className='flex items-center justify-end mt-auto space-x-2'>
                {categories.map((category) => (
                  <p
                    key={category._id}
                    className='bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4'
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <PortableText value={post.body} components={RichTextComponents as unknown as PortableTextReactComponents} />
    </article>
  );
}
