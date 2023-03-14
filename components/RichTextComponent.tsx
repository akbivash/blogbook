import { urlFor } from '@/sanity'
import Image from 'next/image'
import React from 'react'

export const RichTextComponent = {
    types:{
        image:({value}:any) => {
            return <div className='w-full max-w-[700px]  mx-auto'>
                <Image 
                src={urlFor(value).url()}
                alt=''
            height={200}
            width={1000}
              className=' mx-auto w-full'
                />
            </div>
        },
    
    },
    list:{
        bullet:({children}:any) => {
            <ul></ul>
        },
        number:({children}:any) => {
            <ol></ol>
        }
    },
    block:{
        h1:({children}:any) => {
            
        },
        h2:({children}:any) => {

        },
        h3:({children}:any) => {

        },
        h4:({children}:any) => {

        }
    },
    blockquote:({children}:any) => {
        <blockquote>

        </blockquote>
    }
}