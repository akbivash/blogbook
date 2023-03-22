import { NextApiRequest, NextApiResponse } from "next";
import {client} from '../../sanity'

const query = `*[_type == 'comment' && post._ref == $postId]{
    name,
    _id,
    email,
      comment,
      _createdAt,
      image
       
      
  }`
export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const {postId} = req.query
  try{
    const comments =  await client.fetch(query, {postId })
res.status(200).json(comments)
  }catch(err) {
    res.status(400)
.send(err)  }
  
}