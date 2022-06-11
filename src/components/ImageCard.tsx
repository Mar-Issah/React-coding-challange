import { CardMedia, Typography, Avatar } from '@mui/material';
import { FC } from 'react';
import { ProfileContainer, ImgCard, Info } from 'styles/custom-styled';

//this component display a single image
const ImageCard: FC<any> = ({ photo }) => {
  console.log(photo);
  return (
    <ImgCard className='card'>
      <CardMedia
        component='img'
        height='300'
        image={photo.urls.regular}
        alt={photo.alt_description}
        loading='lazy'
      />
      <Info className='info'>
        <ProfileContainer m={1}>
          <Avatar
            alt={photo.user.name}
            src={photo.user.profile_image.large}
            sx={{ width: 24, height: 24 }}
          />
          <Typography variant='body2' ml={1}>
            By {photo.user.name}
          </Typography>
        </ProfileContainer>
      </Info>
    </ImgCard>
  );
};

export default ImageCard;
