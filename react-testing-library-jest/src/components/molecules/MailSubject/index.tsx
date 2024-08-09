import { TypographyProps } from '@mui/material/Typography';
import Label from '../../atoms/label/index';

export interface MailSubjectInterface {
  keys: string;
  variant?: TypographyProps['variant'];
  textColor?: string;
  keyFontWeight?: string;
  value: string;
  valueFontWeight?: string;
  showBorderBottom: boolean;
}

const MailSubject: React.FC<MailSubjectInterface> = ({
  keys,
  variant,
  textColor = 'black',
  keyFontWeight = '600',
  value,
  valueFontWeight = '100',
  showBorderBottom,
}: MailSubjectInterface) => (
  <span
    style={{
      display: 'flex',
      padding: '20px',
      borderBottom: showBorderBottom ? '1px solid #E5E7ED' : '',
    }}
  >
    <Label
      text={keys}
      variant={variant}
      textColor={textColor}
      fontWeight={keyFontWeight}
    />
    :
    <Label
      text={value}
      variant={variant}
      textColor={textColor}
      fontWeight={valueFontWeight}
    />
  </span>
);

export default MailSubject;
