import React from 'react';
import AvtarComponent from '../../atoms/avtar/index';
import IconButton from '../../atoms/iconButton/index';
import Label from '../../atoms/label/index';
import MuiBox from '@mui/material/Box';

import {
  styled,
  TypographyProps,
  IconButtonProps,
} from '@mui/material';

export interface SidebarFooterInterface {
  image: string;
  nameVariant: TypographyProps['variant'];
  companyVariant: TypographyProps['variant'];
  icon: JSX.Element;
  alt: string;
  name: string;
  company: string;
  disable: boolean;
  color: IconButtonProps['color'];
  textColor: string;
  fontWeight: string;
}

const Box = styled(MuiBox)({
  display: 'flex',
  gap: 10,
});

const sidebarFooter: React.FC<SidebarFooterInterface> = (
  props: SidebarFooterInterface
) => {
  return (
    <Box>
      <AvtarComponent src={props.image} alt={props.alt} />
      <MuiBox>
        <Label
          variant={props.nameVariant}
          text={props.name}
          textColor={props.textColor}
          fontWeight={props.fontWeight}
        />
        <Label
          variant={props.companyVariant}
          text={props.company}
          textColor={props.textColor}
          fontWeight={props.fontWeight}
        />
      </MuiBox>
      <IconButton
        icon={props.icon}
        disable={props.disable}
        color={props.color}
      />
    </Box>
  );
};

sidebarFooter.defaultProps = {
  image: '',
  alt: '',
  nameVariant: 'body1',
  companyVariant: 'body1',
  name: '',
  company: '',
  icon: <></>,
  disable: false,
};

export default sidebarFooter;
