import { Box, BoxProps } from '@mui/material';

const ModalContent: React.FC<BoxProps> = ({
  children,
  ...props
}: BoxProps) => <Box {...props}> {children} </Box>;

export default ModalContent;
