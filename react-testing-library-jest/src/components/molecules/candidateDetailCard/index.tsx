import React from 'react';
import ButtonIcon from '../../atoms/iconButton/index';
import Label from '../../atoms/label/index';
import MuiBox from '@mui/material/Box';
import { styled, TypographyProps } from '@mui/material';

const Box = styled(MuiBox)({
  display: 'flex',
  paddingTop: 15,
  paddingBottom: 15,
  paddingLeft: 20,
  paddingRight: 20,
  gap: 10,
  backgroundColor: '#F7F8FA',
  width: 425,
  borderRadius: '8px',
});

export interface CandidateDetailInterface {
  icon: JSX.Element;
  titleVariant?: TypographyProps['variant'];
  infoVariant?: TypographyProps['variant'];
  title: string;
  info: string;
  disable: boolean;
  textColor?: string;
  fontWeight?: string;
}

const CandidateDetailCard: React.FC<CandidateDetailInterface> = (
  props: CandidateDetailInterface
) => (
  <Box>
    <ButtonIcon
      icon={props.icon}
      disable={props.disable}
    ></ButtonIcon>
    <MuiBox>
      <Label
        variant={props.titleVariant}
        text={props.title}
        textColor={props.textColor}
        fontWeight={props.fontWeight}
      ></Label>
      <Label
        variant={props.infoVariant}
        text={props.info}
        textColor={props.textColor}
        fontWeight={props.fontWeight}
      ></Label>
    </MuiBox>
  </Box>
);

CandidateDetailCard.defaultProps = {
  titleVariant: 'subtitle1',
  infoVariant: 'subtitle1',
};

export default CandidateDetailCard;
