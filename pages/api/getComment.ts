import { NextApiRequest, NextApiResponse } from "next";
import * as fs from 'fs'
import {client} from '../../sanity'

const query = `*[_type == 'comment' && post._ref == $postId]{
    name,
    _id,
    email,
      comment,
      _createdAt
       
      
  }`
export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const {postId} = req.query
  try{
    const comments =  await client.fetch(query, {postId })
    // console.log(comments)
res.status(200).json(comments)
  }catch(err) {
    res.status(400)
.send(err)  }
  
}