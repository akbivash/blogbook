import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),  defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'blockPost',
      title: 'Block Post',
      description:'Toggle if the post is inappropriate',
      type: 'boolean',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'createdAt',
      title: 'Created at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: "array",
  of: [
    {
      title: "Block",
      type: "block",
    },
    {
      type: "image",
      options: { hotspot: true },
    },
{
  type:'code',
  title:'code',
  options: {
    language: 'javascript',
    languageAlternatives: [
      {title: 'Javascript', value: 'javascript'},
      {title: 'Python', value: 'python'},
      {title: 'CSS', value: 'css'},
    ],
    withFilename: true,
  },
}
  
  ],
    }),
   
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})



const seconds = new Date().getTime() / 1000; 
