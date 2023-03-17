import { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../sanity";

export default async function createComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { _id, name, email, comment } =  req.body

  try {
    await client.create({
      _type: "comment",
      post: {
        _type: "reference",
        _ref: _id,
      },
      name,
      email,
      comment,
    });
  res.status(200).send('comment submitted')

  } catch (err) {
    console.log(err);
  }
}
