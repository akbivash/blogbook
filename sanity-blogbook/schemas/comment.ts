import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
   
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'comment',
      type: 'text',
    }),
    defineField({
      name: 'blockComment',
      title: 'Block Comment',
      description:'Toggle if the comment is inappropriate',
      type: 'boolean',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'url',
    
    }),

    defineField({
      name: 'post',
      type: 'reference',
      to: [{type: 'post'}],
    }),
  ],
})
