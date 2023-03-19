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
}

interface Props {
    post: Post[];
  }
  
  interface User{
    emailId: string
  }
  
  interface InputData {
    _id: string;
    email: any;
    comment: string;
  }