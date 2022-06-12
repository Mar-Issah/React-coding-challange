import { FC, useState } from 'react';
import dateFormat from 'dateformat';
import {
  Box,
  Modal,
  Fade,
  Backdrop,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
} from '@mui/material';
import { FcLike } from 'react-icons/fc';
import { AiOutlineClose } from 'react-icons/ai';
import { ImageContainer } from 'styles/custom-styled';

interface ModalProps {
  open: boolean;
  photo: any;
  handleOpen: () => void;
  handleClose: () => void;
}

// styles for the modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  height: '80%',
};

const PhotoModal: FC<ModalProps> = ({ open, handleClose, photo }) => {
  //function to format Created At date string
  const formattedDate = (date: string) => {
    return dateFormat(date, 'dddd, mmmm dS, yyyy');
  };

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Card sx={{ boxShadow: 'none' }}>
              <CardHeader
                avatar={
                  <Avatar
                    src={photo.user.profile_image.large}
                    alt={photo.user.name}
                  />
                }
                action={
                  <IconButton onClick={handleClose}>
                    <AiOutlineClose color='red' />
                  </IconButton>
                }
                title={'By : ' + photo.user.name}
                subheader={'Created At: ' + formattedDate(photo.created_at)}
              />
              <ImageContainer
                style={{
                  backgroundImage: `url(${photo.urls.small_s3})`,
                }}
              ></ImageContainer>
              <CardContent>
                <Typography variant='body2' color='text.secondary'>
                  {photo.description || 'No description available'}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Box>
                  <FcLike /> Likes: {photo.likes}
                </Box>
              </CardActions>
            </Card>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default PhotoModal;
