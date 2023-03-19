import { Props } from '@/pages/blogs'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity'

const Blogs = ({posts}:Props) => {

  return (
    <>
    <h2 className='text-teal-600 text-xl  border-b-2 mb-4  w-fit mx-auto border-teal-600'>Latest Blogs</h2>
    <div className='grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]  gap-8 p-3'>
    {posts && posts.map(p => {
   
     return <Link href={`/blogs/${p.slug.current}`} key={p._id} className='w-full max-w-[700px] mx-auto shadow-xl dark:shadow-[#12222d]  shadow-[#c9d1cd] '>
       <div >
         <Image  src={urlFor(p.mainImage).url()} alt="" width={1000} height={10} className=' w-full h-[250px]  object-cover'/>
<div className='my-4 pl-4'>
<p className='text-xl my-4'>{p.title}</p>
       <p>{p.description} by <span className='text-green-500'>{p.author?.name}</span></p>
</div>
     
       </div>
     </Link>
    })}
   </div>
   </>
  )
}

export default Blogs