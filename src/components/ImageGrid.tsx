import { Box, Grid } from '@mui/material';
import { FC } from 'react';
import ImageCard from './ImageCard';

const ImageGrid: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }} p={3}>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        {Array.from(Array(6)).map((_, index: number) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ImageCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ImageGrid;
