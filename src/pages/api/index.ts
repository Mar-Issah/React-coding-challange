// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios, { AxiosResponse } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  photos: string;
}

//make a get request to unsplash API, if search query is present get the list of searched photos else get the list of all photos

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;
  const { search } = req.query;
  if (method === 'GET') {
    try {
      let photos;

      if (search) {
        photos = await axios.get(
          `https://api.unsplash.com/search/photos?page=5&query=${search}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_ID}`
        );
      } else {
        photos = await axios.get(
          `https://api.unsplash.com/photos/?&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_ID}`
        );
      }
      res
        .status(200)
        .json({ photos: 'process.env.REACT_APP_UNSPLASH_ACCESS_ID' });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        // 👇️ error: AxiosError<any, any>
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        // res.status(500).json(error.message);
        return 'An unexpected error occurred';
      }
    }
  }
}
