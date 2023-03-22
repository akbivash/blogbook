import { Props } from '@/pages/blogs'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity'
import {client} from '../sanity'

const Blogs = ({posts}:Props) => {
//  const[categories, setCategories] = useState([])
  //  useEffect(() => {

  //   const getCategories = async() => {
  //     const query = `*[_type == 'category']{
  //       title,
  //         _id
  //      }`

  //      const cats = await client.fetch(query)
  //    setCategories(cats)
    
  //   }
  //   getCategories()
   
  //  },[])


  return (
    <>
{/* <div className='flex flex-wrap gap-2 justify-center'>
{categories.map((c:Post) => {

return <Link key={c._id} className='bg-teal-600 p-2 text-white ' onClick={() => getBlogsByCategory(c.title)}>{c.title}</Link>
})}
</div> */}
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


