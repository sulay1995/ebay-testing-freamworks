import { Box, BoxProps, styled } from '@mui/material';

const HeaderBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '24px 0 24px 24px',
});

const Header: React.FC<BoxProps> = ({
  children,
  ...props
}: BoxProps) => (
  <HeaderBox {...props} style={{}}>
    {children}
  </HeaderBox>
);

export default Header;
