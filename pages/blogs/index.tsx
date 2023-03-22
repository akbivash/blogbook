import { Post } from '@/typing'
import Blogs from '@/components/Blogs'
import React from 'react'
import {client} from '../../sanity'

export interface Props {
posts:[Post]
}

const Home = (props:Props) => {
const{posts} = props

  return ( <Blogs posts={posts} />)
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
  categories
}`


const posts = await client.fetch(query)
return {
  props:{
posts,

  }
}
}
