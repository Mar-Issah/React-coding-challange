import { ReactNode, FC } from 'react';
import Notice from './Notice';

interface Props {
  children?: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Notice />
      {children}
    </>
  );
};

export default Layout;
