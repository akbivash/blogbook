import { Post } from '@/typing'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {client, urlFor} from '../../sanity'

interface Props {
posts:[Post]
}

const Home = (props:Props) => {
const{posts} = props
  return (
    <div className='grid   grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))]  gap-8 p-3'>
     {posts.map(p => {
    
      return <Link href={`/blogs/${p.slug.current}`} key={p._id} className='w-full max-w-[700px] mx-auto shadow-xl dark:shadow-[#3b3b3b]  shadow-[#c9d1cd] '>
        <div className=''>
          <Image  src={urlFor(p.mainImage).url()} alt="" width={1000} height={300} className='h-[300px] w-full object-cover'/>
<div className='my-4 pl-4'>
<p className='text-xl my-4'>{p.title}</p>
        <p>{p.description} by <span className='text-green-500'>{p.author?.name}</span></p>
</div>
      
        </div>
      </Link>
     })}
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
const query = `*[_type == 'post']{
  _id,
  title,
 description,
  author -> {
    name,
    image
  },
  mainImage,
  slug,
}`

const posts = await client.fetch(query)
return {
  props:{
posts
  }
}
}
