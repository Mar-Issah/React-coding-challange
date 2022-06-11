import type { NextPage } from 'next';
import { Box, InputBase, Divider } from '@mui/material';
import ImageGrid from 'components/ImageGrid';
import { Search } from 'styles/custom-styled';
import { ImSearch } from 'react-icons/im';
import React, { useState } from 'react';

const Home: NextPage = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  console.log(searchValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };
  return (
    <Box sx={{ backgroundColor: '#f2f2f2', minHeight: '100vh' }}>
      <Box display='flex' justifyContent='end'>
        <Search>
          <ImSearch />{' '}
          <InputBase
            value={searchValue}
            type='text'
            onChange={handleChange}
            placeholder=' Search...'
          />
        </Search>
      </Box>
      <Divider />
      <ImageGrid />
    </Box>
  );
};

export default Home;
