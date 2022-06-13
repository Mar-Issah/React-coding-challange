import { CardMedia, Typography, Avatar } from '@mui/material';
import { FC, useState } from 'react';
import { ProfileContainer, ImgCard, Info } from 'styles/custom-styled';
import PhotoModal from './PhotoModal';

interface Photo {
  photo: any;
}
//this component display a single image.
// Modal is triggered when user clicks on image card
const ImageCard: FC<Photo> = ({ photo }: Photo) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
