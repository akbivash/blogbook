export interface Post {
    _id: string,
    _createdAt:string,
    title:string,
    author:{
        name:string,
        image:string
    },
    comments: [],
    description:string,
    categories:[],
    mainImage:{
        asset:{
            url:string
        }
    },
    slug:{
        current:string
    },
    body:[object]
}

export interface Comment {
approved:boolean,
_id: string;
name: string;
email: string;
_createdAt:string;
comment: string;
image:any;
}

interface Props {
    post: Post[];
    postsWithCategory:Post[]
  }
  
  interface User{
    emailId: string
  }
  
  interface InputData {
    _id: string;
    email: any;
    comment: string;
    image:any
  }