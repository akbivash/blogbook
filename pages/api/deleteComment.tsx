import { NextApiRequest, NextApiResponse } from "next";
import {client} from '../../sanity'


export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const { commentId} = JSON.parse(req.body)
    const transaction = client.transaction().delete(
      commentId
    );
    
    transaction
      .commit()
      .then((response) => {
        console.log(`Document with ID ${commentId} deleted successfully`);
        res.status(200).send(response)
      })
      .catch((error) => {
        console.error(`Error deleting document:`, error.message);
        res.status(400).send(error)
      });
}