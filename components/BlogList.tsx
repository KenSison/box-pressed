'use client';

import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

import urlFor from '../lib/urlFor';
import ClientSideRoute from './ClientSideRoute';

type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  return (
    <div className='mb-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24'>
        {posts.map((post) => {
          const { _id, _createdAt, slug, mainImage, author, categories, title, description } = post;
          return (
            <ClientSideRoute key={_id} route={`/post/${slug.current}`}>
              <div className='flex flex-col group cursor-pointer'>
                <div className='relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out'>
                  <Image
                    className='object-cover object-left lg:object-center'
                    src={urlFor(mainImage).url()}
                    alt={author.name}
                    fill
                  />
                  <div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between'>
                    <div>
                      <p className='font-bold'>{title}</p>
                      <p>
                        {new Date(_createdAt).toLocaleDateString('ja', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center'>
                      {categories.map((category) => (
                        <div className='bg-[#F09819] text-center text-black px-3 py-1 rounded-full text-sm font-semibold'>
                          <p>{category.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className='mt-5 flex-1'>
                  <p className='underline text-lg font-bold'>{title}</p>
                  <p className='line-clamp-2 text-gray-500'>{description}</p>
                </div>

                <p className='mt-5 font-bold flex items-center group-hover:underline'>
                  続きを読む <ArrowUpRightIcon className='ml-2 h-4 w-4' />
                </p>
              </div>
            </ClientSideRoute>
          );
        })}
      </div>
    </div>
  );
}
