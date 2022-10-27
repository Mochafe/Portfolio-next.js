// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  fetch("https://itch.io/api/1/zJgbfInBx6rW9asVDLu078dM9jQD3xD0jnbOjWTr/my-games").then(result => {
    result.json().then(resultJson => {
      res.status(200).json(resultJson);
    }
    )
  }).catch(err => {
    res.status(400);
  })
}
