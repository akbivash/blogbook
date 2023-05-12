import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity";
import { getAllCategories } from "@/utils/apiCalls/getAllCategories";
import { useGlobalContext } from "@/context/AppContext";
import { getPostsByCategory } from "@/utils/apiCalls/getPostsByCategory";
import { Post } from "@/typing";

const Blogs = () => {
  const { setCategories, setPosts, state, setSelectedCategory } =
    useGlobalContext();

  useEffect(() => {
    getAllCategories(setCategories);
    getPostsByCategory(setPosts, state.selectedCategory);
  }, [state.selectedCategory]);

  return (
    <>
      <div className="flex flex-wrap gap-2 p-4 ">
        {state.categories.map((c: any) => {
          if (c.title === state.selectedCategory) {
            return (
              <button
                key={c._id}
                className="bg-teal-900 p-2 text-white rounded-sm "
                onClick={() => setSelectedCategory(c.title)}
              >
                {c.title}
              </button>
            );
          } else {
            return (
              <button
                key={c._id}
                className="bg-teal-600 p-2 text-white rounded-sm "
                onClick={() => setSelectedCategory(c.title)}
              >
                {c.title}
              </button>
            );
          }
        })}
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]  gap-8 p-3">
        {state.posts.map((p: Post) => {
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
