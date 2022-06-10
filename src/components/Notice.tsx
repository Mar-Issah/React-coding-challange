import { AppBar } from '@mui/material';
import { AppBarContent } from '../../styles/notice-styled';

const Notice = () => {
  return (
    <AppBar sx={{ backgroundColor: '#000' }}>
      <AppBarContent>
        Scroll down to view our amazing photos. Enjoy!
      </AppBarContent>
    </AppBar>
  );
};

export default Notice;
