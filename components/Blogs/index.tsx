import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity";
import { useGlobalContext } from "@/context/AppContext";
import { Post } from "@/typing";
import { getAllCategories } from "@/api_calls/getAllCategories";
import { getPostsByCategory } from "@/api_calls/getPostsByCategory";

const Blogs = () => {
  const { setCategories, setPosts, state, setSelectedCategory } =
    useGlobalContext();
  const [index, setIndex] = useState(0);

  let itemPerPage = 4;
  let pages = Array(Math.ceil(state.posts.length / itemPerPage))
    .fill(null)
    .map((_, i) => i + 1);

  useEffect(() => {
    getAllCategories(setCategories);
    getPostsByCategory(setPosts, state.selectedCategory);
    setIndex(0)
  }, [state.selectedCategory]);
  
  return (
    <>
      <div className="flex flex-wrap gap-2 p-4 ">
        {state.categories.map((c: any) => {
          if (c.title === state.selectedCategory) {
            return (
              <button
                key={c._id}
                className="bg-teal-500 p-2 text-white rounded-sm "
                onClick={() => setSelectedCategory(c.title)}
              >
                {c.title}
              </button>
            );
          } else {
            return (
              <button
                key={c._id}
                className="bg-teal-900 p-2 text-white rounded-sm "
                onClick={() => setSelectedCategory(c.title)}
              >
                {c.title}
              </button>
            );
          }
        })}
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]  gap-8 p-3">
        {state.posts.length !== 0 ? (
          state.posts
            .slice(itemPerPage * index, itemPerPage * (index + 1))
            .map((p: Post) => {
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
        ) : (
          <span className="text-center text-stone-900 dark:text-white">
            No result found
          </span>
        )}
      </div>

      <div className="text-stone-900  flex gap-4 justify-center dark:text-white p-4">
        {pages.map((p: any, i: any) => {
          return (
            <div className="text-white">
              {index === i ? (
                <span
                  key={p * 12}
                  className="bg-green-500 px-4 py-2 cursor-pointer"
                  onClick={() => setIndex(i)}
                >
                  {p}
                </span>
              ) : (
                <span
                  key={i}
                  className="bg-green-700 px-4 py-2 cursor-pointer"
                  onClick={() => setIndex(i)}
                >
                  {p}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Blogs;
