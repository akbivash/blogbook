import { client } from "@/sanity";

export const getAllCategories = async (setCategories:any) => {
  const query = `*[_type == 'category']{
    title,
    _id
  }`;
  const categories = await client.fetch(query);
setCategories(categories)

};

