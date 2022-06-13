import type { NextPage } from 'next';
import ImageGrid from 'components/ImageGrid';
import { Box, Tooltip, Fab } from '@mui/material';
import { MdKeyboardArrowUp } from 'react-icons/md';

const Home: NextPage = () => {
  //function to scroll page to the top
  const handleScroll = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <>
      <Box sx={{ backgroundColor: '#f2f2f2', minHeight: '100vh' }}>
        <ImageGrid />
      </Box>
      <Tooltip
        title='Scroll to the top'
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
        }}
        onClick={handleScroll}
      >
        <Fab size='small' color='primary' aria-label='scroll to top'>
          <MdKeyboardArrowUp />
        </Fab>
      </Tooltip>
    </>
  );
};

export default Home;
