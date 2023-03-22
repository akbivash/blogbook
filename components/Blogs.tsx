import { Props } from "@/pages/blogs";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity";
import { client } from "../sanity";
import { Post } from "@/typing";

const Blogs = ({ posts }: Props) => {
  const [categories, setCategories] = useState([]);
  const [updatedPosts, setUpdatedPosts] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const getAllCategories = async () => {
      const query = `*[_type == 'category']{
      title,
        _id
     }`;
      const cats = await client.fetch(query);
      setCategories(cats);
    };
    getAllCategories();

    const getProductsByCategory = async () => {
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
   }`;
      const posts = await client.fetch(query, { category });
      setUpdatedPosts(posts);
    };
    getProductsByCategory();
  }, [category]);

  return (
    <>
      <div className="flex flex-wrap gap-2 p-4 ">
        {category === "all" ? (
          <button
            className="bg-teal-800 p-2 text-white rounded-sm"
            onClick={() => setCategory("all")}
          >
            All
          </button>
        ) : (
          <button
            className="bg-teal-600 p-2 text-white rounded-sm "
            onClick={() => setCategory("all")}
          >
            All
          </button>
        )}
        {categories.map((c: Post) => {
          if (c.title === category) {
            return (
              <button
                key={c._id}
                className="bg-teal-900 p-2 text-white rounded-sm "
                onClick={() => setCategory(c.title)}
              >
                {c.title}
              </button>
            );
          } else {
            return (
              <button
                key={c._id}
                className="bg-teal-600 p-2 text-white rounded-sm "
                onClick={() => setCategory(c.title)}
              >
                {c.title}
              </button>
            );
          }
        })}
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]  gap-8 p-3">
        {category === "all"
          ? posts.map((p: Post) => {
              return (
                <Link
                  href={`/blogs/${p.slug.current}`}
                  key={p._id}
                  className="w-full max-w-[700px] mx-auto shadow-xl dark:shadow-[#12222d]  shadow-[#c9d1cd] "
                >
                  <div>
                    <Image
                      src={urlFor(p.mainImage).url()}
                      alt=""
                      width={1000}
                      height={10}
                      className=" w-full h-[250px]  object-cover"
                    />
                    <div className="my-4 pl-4">
                      <p className="text-xl my-4">{p.title}</p>
                      <p>
                        {p.description} by{" "}
                        <span className="text-green-500">{p.author?.name}</span>
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })
          : updatedPosts.map((p: Post) => {
              return (
                <Link
                  href={`/blogs/${p.slug.current}`}
                  key={p._id}
                  className="w-full max-w-[700px] mx-auto shadow-xl dark:shadow-[#12222d]  shadow-[#c9d1cd] "
                >
                  <div>
                    <Image
                      src={urlFor(p.mainImage).url()}
                      alt=""
                      width={1000}
                      height={10}
                      className=" w-full h-[250px]  object-cover"
                    />
                    <div className="my-4 pl-4">
                      <p className="text-xl my-4">{p.title}</p>
                      <p>
                        {p.description} by{" "}
                        <span className="text-green-500">{p.author?.name}</span>
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
      </div>
    </>
  );
};

export default Blogs;
