import { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../sanity";

export default async function createComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { _id,  email, comment , image} =  req.body
  try {
    await client.create({
      _type: "comment",
      post: {
        _type: "reference",
        _ref: _id,
      },
  
      email,
      comment,
      image
    });
  res.status(200).send('comment submitted')

  } catch (err) {
    console.log(err);
  }
}
