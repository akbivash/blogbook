import { urlFor } from '@/sanity';
import Image from 'next/image';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter'
export const RichTextComponent = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="w-full max-w-[700px]  mx-auto">
          <Image
            src={urlFor(value).url()}
            alt=""
            height={200}
            width={1000}
            className="mx-auto w-full"
          />
        </div>
      );
    },
    code: ({ value }: any) => {
      return (
   
          <SyntaxHighlighter className='bg-dark-dark' >
      
      {value.code}

 </SyntaxHighlighter>
   
      );
    },
  },
  list: {
    bullet: ({ children }: any) => {
      return <ul>{children}</ul>;
    },
    number: ({ children }: any) => {
      return <ol>{children}</ol>;
    },
  },
  block: {
    h1: ({ children }: any) => {
      return <h1 className="text-4xl">{children}</h1>;
    },
    h2: ({ children }: any) => {
      return <h2 className="text-3xl">{children}</h2>;
    },
    h3: ({ children }: any) => {
      return <h3 className="text-2xl">{children}</h3>;
    },
    h4: ({ children }: any) => {
      return <h4 className="text-xl">{children}</h4>;
    },
  },
  blockquote: ({ children }: any) => {
    return <blockquote>{children}</blockquote>;
  },
};
