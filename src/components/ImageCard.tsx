import { Box, Grid, CardMedia, Typography, Avatar } from '@mui/material';
import { FC } from 'react';
import { ProfileContainer, ImgCard, Info } from 'styles/custom-styled';
//import { makeStyles } from '@material-ui/core/styles';

const ImageCard: FC = () => {
  return (
    <ImgCard className='card'>
      <CardMedia
        component='img'
        height='300'
        image='https://res.cloudinary.com/dytnpjxrd/image/upload/v1654864990/ZENC/ivan-kazlouskij-b7R2wAlbYDU-unsplash_1_v2v7no.jpg'
        alt='Unsplash photo'
        loading='lazy'
      />
      <Info className='info'>
        <ProfileContainer m={1}>
          <Avatar
            alt='Marsiya Issah'
            src='https://images.unsplash.com/profile-1470086144548-9b86aec8f374?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128'
            sx={{ width: 24, height: 24 }}
          />
          <Typography variant='body2' ml={1}>
            By Marsiya Issah
          </Typography>
        </ProfileContainer>
      </Info>
    </ImgCard>
  );
};

export default ImageCard;
