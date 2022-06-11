import { QueryFunctionContext, useInfiniteQuery } from 'react-query';
import axios from 'axios';

//   photos = await axios.get(
//     `https://api.unsplash.com/search/photos?page=5&query=${search}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_ID}`

//fetch function to make api call to server
const fetchPhotos = async ({ pageParam }: { pageParam: any }) => {
  return await axios
    .get
    //  `https://api.unsplash.com/photos/?page=${pageParam}&per_page=12&client_id=q-BdrEabVEk28udJqFm30HN_AA_xbs_KnE53hsE2lgc`
    ();
};

export const usePhotosData = () => {
  return useInfiniteQuery(
    ['photos'],
    ({ pageParam = 1 }: QueryFunctionContext) => fetchPhotos(pageParam),
    {
      getNextPageParam: (lastPage: any, pages: any) => {
        return lastPage.nextCursor;
      },
    }
  );
};
