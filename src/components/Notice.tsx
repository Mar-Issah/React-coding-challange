import { AppBar } from '@mui/material';
import { FC } from 'react';
import { AppBarContent } from 'styles/custom-styled';

const Notice: FC = () => {
  return (
    <AppBar position='sticky' sx={{ backgroundColor: '#000' }}>
      <AppBarContent>
        Scroll down to view our amazing photos. Enjoy!
      </AppBarContent>
    </AppBar>
  );
};

export default Notice;
