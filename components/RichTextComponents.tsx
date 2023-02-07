import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import urlFor from '../lib/urlFor';

// TODO: sanityからtypeをimportしてくる
type TextComponent = {
  children: ReactNode;
};

type ImageComponent = {
  value: Image;
};

type LinkComponent = {
  children: ReactNode;
  value: {
    href: string;
  };
};

export const RichTextComponents = {
  types: {
    image: ({ value }: ImageComponent) => {
      return (
        <div className='relative w-full h96 m-10 mx-auto'>
          <Image className='object-contain' src={urlFor(value).url()} alt='Blog Post Image' fill />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: TextComponent) => <ul className='ml-10 py-5 list-disc space-y-5'>{children}</ul>,
    number: ({ children }: TextComponent) => <ol className='mt-lg list-decimal'>{children}</ol>,
  },
  block: {
    h1: ({ children }: TextComponent) => <h1 className='text-5xl py-10 font-bold'>{children}</h1>,
    h2: ({ children }: TextComponent) => <h1 className='text-4xl py-10 font-bold'>{children}</h1>,
    h3: ({ children }: TextComponent) => <h1 className='text-3xl py-10 font-bold'>{children}</h1>,
    h4: ({ children }: TextComponent) => <h1 className='text-2xl py-10 font-bold'>{children}</h1>,
    blockquote: ({ children }: TextComponent) => (
      <blockquote className='border-l-[#F09819] border-l-4 pl-5 py-5 my-5'>{children}</blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: LinkComponent) => {
      const rel = value.href && !value.href.startsWith('/') ? 'noreferrer noopene' : undefined;

      return (
        <Link href={value.href} rel={rel} className='underline decoration-[#F09819] hover:decoration-black'>
          {children}
        </Link>
      );
    },
  },
};
