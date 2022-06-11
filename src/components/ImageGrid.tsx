import { Box, Grid } from '@mui/material';
import { FC, Fragment } from 'react';
import ImageCard from './ImageCard';
import { usePhotosData } from 'hooks/usePhotosData';
import { AxiosResponse } from 'axios';

//this component display list of images
const ImageGrid: FC = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = usePhotosData();

  console.log(data);
  return (
    <Box sx={{ flexGrow: 1 }} p={3}>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        {/* {Array.from(Array(6)).map((_, index: number) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ImageCard />
          </Grid>
        ))} */}
        {data &&
          data?.pages.map((group: AxiosResponse<any>, idx: number) => {
            return (
              <Fragment key={idx}>
                {group.data.map((photo: any, idx: number) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                    <ImageCard photo={photo} />
                  </Grid>
                ))}
              </Fragment>
            );
          })}
        <div>
          {hasNextPage && (
            <button
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage ? 'Loading ...' : 'More'}
            </button>
          )}
        </div>
      </Grid>
    </Box>
  );
};

export default ImageGrid;
