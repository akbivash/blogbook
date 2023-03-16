import {urlFor,client} from '../../sanity'
import { Post } from "../../typing";
import { GetStaticProps } from "next";
import {PortableText, PortableTextBlockComponent} from '@portabletext/react'
import { RichTextComponent } from '@/components/RichTextComponent';
import Image from 'next/image'
interface Props{
  post:Post[]
}

function Blog({post}:Props) {
  return <div className=' w-full p-3 mx-auto max-w-[900px]'>
   
      <Image  src={urlFor(post[0].mainImage).url()!} alt="" width={1000} height={300} className='w-full max-w-[900px]  h-60 object-cover' />
<article className='my-4 '>
  <h1 className='text-2xl '>{post[0].title}</h1>
  <h2>{post[0].description}</h2>
  <div className='my-4 grid gap-4'>
    <img src={urlFor(post[0].author.image).url()}  alt="" className='h-10 w-10 rounded-full object-cover' />
    <p>
      Blog Post by <span className='text-green-600'>{post[0].author.name}</span> 
      {post[0]._createdAt !== null || undefined &&  <span> Published at {new Date(post[0]._createdAt).toLocaleString()}</span>}

    </p>
    <PortableText 
 value={post[0].body }
 components={RichTextComponent}
 
 />
  </div>
</article>
    {/* comment section  */}
    <div className='w-full max-w-[400px] mx-auto'>
      <h2>Leave a comment !</h2>
      <form action="" className='mt-4   grid gap-4' >
       <div className="form_control">
       <label htmlFor="">Name</label>
        <input type="text" />
       </div>
       <div className="form_control">
       <label htmlFor="">Email</label>
        <input type="email" />
       </div>
       <div className="form_control">
       <label htmlFor="">Comment</label>
       <textarea ></textarea>
       </div>
       <button>Submit</button>
      </form>
    </div>

  </div>;
}

export default Blog;

export const getStaticPaths = async () => {
  const query = `*[_type == 'post']{
    _id,
    slug{
        current
    }
}`;

  const posts = await client.fetch(query);
  const paths = posts.map((p: Post) => {
  
    return {
      params: {
        slug: p.slug.current,
      },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const query = `*[_type == 'post' && slug.current == $slug]{
    _id,
      createdAt,
      title,
      author -> {
        name,
        image
      },
      description,
      mainImage,
    slug,
  body
}`;
  const post = await client.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
    },
    revalidate:60
  };
};
