import Label from '../../atoms/label/index';
import IconButton from '../../atoms/iconButton';
import { Box, TypographyProps } from '@mui/material';

export interface ModalHeaderInterface {
  variant: TypographyProps['variant'];
  text: string;
  textColor: string;
  icon: JSX.Element;
  disable: boolean;
  float: string;
  fontWeight: string;
}

const ModalHeader: React.FC<ModalHeaderInterface> = (
  props: ModalHeaderInterface
) => (
  <Box>
    <Label
      variant={props.variant}
      text={props.text}
      textColor={props.textColor}
      fontWeight={props.fontWeight}
    />
    <IconButton
      icon={props.icon}
      disable={props.disable}
      float={props.float}
    />
  </Box>
);

export default ModalHeader;
