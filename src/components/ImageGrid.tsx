import {
  Box,
  Grid,
  Button,
  CircularProgress,
  Snackbar,
  Alert,
} from '@mui/material';
import { FC, Fragment, useState } from 'react';
import ImageCard from './ImageCard';
import { AxiosResponse } from 'axios';
import { ButtonContainer } from 'styles/custom-styled';
import { useInfiniteQuery, QueryFunctionContext } from 'react-query';
import axios from 'axios';

//query function to fetch data from unsplash api
const fetchPhotos = ({ pageParam = 1 }: { pageParam: number }) => {
  console.log(pageParam);
  return axios.get(
    `https://api.unsplash.com/photos/?page=${pageParam}&per_page=12&client_id=${process.env.NEXT_PUBLIC_ACCESS_ID}`
  );
};

//this component display list of images
const ImageGrid: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    isLoading,
    data,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['photos'],
    ({ pageParam }: QueryFunctionContext<any>) => fetchPhotos(pageParam),
    {
      getNextPageParam: (_lastPage: any, pages: any[]) => {
        return pages.length + 1;
      },
    }
  );

  console.log(data);

  if (isLoading) {
    return (
      <Box position='absolute' right='50%' top='50%'>
        <CircularProgress color='inherit' />
      </Box>
    );
  }
  console.log(data);

  //display snackbar if any error occurs
  if (isError) {
    return (
      <>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
            Opps! Something occurred please try again.
          </Alert>
        </Snackbar>
      </>
    );
  }

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
        <ButtonContainer>
          {hasNextPage && (
            <Button
              style={{
                backgroundColor: '#000',
              }}
              variant='contained'
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage ? 'Loading ...' : 'More'}
            </Button>
          )}
        </ButtonContainer>
      </Grid>
    </Box>
  );
};

export default ImageGrid;
