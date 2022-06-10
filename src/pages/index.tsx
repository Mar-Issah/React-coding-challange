import type { NextPage } from 'next';
import { Box, InputBase, Divider } from '@mui/material';
import ImageGrid from 'components/ImageGrid';
import { Search } from 'styles/custom-styled';
import { ImSearch } from 'react-icons/im';

const Home: NextPage = () => {
  return (
    <Box sx={{ backgroundColor: '#f2f2f2', minHeight: '100vh' }}>
      <Box display='flex' justifyContent='end'>
        <Search>
          <ImSearch /> <InputBase placeholder=' Search...' />
        </Search>
      </Box>
      <Divider />
      <ImageGrid />
    </Box>
  );
};

export default Home;
