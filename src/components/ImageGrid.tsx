import { Box, Grid, Button } from '@mui/material';
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

  return (
    <Box sx={{ flexGrow: 1 }} p={3}>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        {data &&
          data?.pages.map((page: AxiosResponse<any>, idx: number) => {
            return (
              <Fragment key={idx}>
                {page.data.map((photo: any, idx: number) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                    <ImageCard photo={photo} />
                  </Grid>
                ))}
              </Fragment>
            );
          })}
        <Box>
          {/* {hasNextPage && ( */}
          <Button
            variant='contained'
            color='success'
            onClick={() => fetchNextPage()}
            // disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage ? 'Loading ...' : 'More'}
          </Button>
          {/* )} */}
        </Box>
      </Grid>
    </Box>
  );
};

export default ImageGrid;
