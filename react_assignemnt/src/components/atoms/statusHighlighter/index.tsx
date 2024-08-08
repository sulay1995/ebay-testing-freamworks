import Label from '../label/index';
import { TypographyProps } from '@mui/material';

export interface StatusHighlighterInterface {
  variant: TypographyProps['variant'];
  text: string;
  backgroundColor: string;
  textColor: string;
  fontWeight: string;
}

const StatusHighlighter: React.FC<StatusHighlighterInterface> = (
  props: StatusHighlighterInterface
) => (
  <span
    style={{
      backgroundColor: props.backgroundColor,
      padding: '4px 12px',
      borderRadius: '4px',
    }}
  >
    <Label
      variant={props.variant}
      text={props.text}
      textColor={props.textColor}
      fontWeight={props.fontWeight}
    />
  </span>
);

export default StatusHighlighter;
