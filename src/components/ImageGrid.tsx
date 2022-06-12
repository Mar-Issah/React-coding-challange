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
import { usePhotosData } from 'hooks/usePhotosData';
import { AxiosResponse } from 'axios';
import PhotoModal from './PhotoModal';

//this component display list of images
const ImageGrid: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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

  if (isLoading) {
    return (
      <Box textAlign='center' mt='25%'>
        <CircularProgress color='inherit' />
      </Box>
    );
  }

  //dispplay snackbar if any error occurs
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
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
