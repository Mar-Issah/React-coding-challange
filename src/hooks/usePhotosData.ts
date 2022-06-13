import { QueryFunctionContext, useInfiniteQuery } from 'react-query';
import axios from 'axios';

//fetch function to make api call to server
//if user enters a search string use value to query api

const fetchPhotos = async ({ pageParam = 0 }: { pageParam: number }) => {
  console.log(pageParam);
  return await axios.get(
    `https://api.unsplash.com/photos/?page=${pageParam}&per_page=12&client_id=${process.env.NEXT_PUBLIC_ACCESS_ID}`
  );
};

export const usePhotosData = () => {
  return useInfiniteQuery(
    ['photos'],
    ({ pageParam = 0 }: QueryFunctionContext) => fetchPhotos(pageParam),
    {
      // enabled: false,
      cacheTime: 5000,
      staleTime: 30000,
      getNextPageParam: (_lastPage: any, pages: any[]) => {
        console.log(pages);
        if (pages.length < 4) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
    }
  );
};
