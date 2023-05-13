import { client } from "@/sanity";

    export const getPostsByCategory = async (setPosts:any, category:any) => {
        if(category === 'All'){
            const query = `*[_type == 'post' ]{
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
               }`;
                  const posts = await client.fetch(query);
                  setPosts(posts);
        }else{
            const query = `*[_type == 'post' && $category in categories[]->title]{
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
               }  `;
                  const posts = await client.fetch(query, { category });
                  setPosts(posts);
        }
     
    };