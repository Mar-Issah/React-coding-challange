import { CardMedia, Typography, Avatar } from '@mui/material';
import { FC, useState } from 'react';
import { ProfileContainer, ImgCard, Info } from 'styles/custom-styled';
import PhotoModal from './PhotoModal';

//this component display a single image
const ImageCard: FC<any> = ({ photo }) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(photo);
  return (
    <>
      <PhotoModal
        photo={photo}
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      <ImgCard className='card'>
        <CardMedia
          component='img'
          height='300'
          image={photo.urls.regular}
          alt={photo.alt_description}
          loading='lazy'
        />
        <Info className='info' onClick={handleOpen}>
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
    </>
  );
};

export default ImageCard;
