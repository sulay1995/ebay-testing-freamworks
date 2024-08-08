import { Alert, AlertProps } from '@mui/material';

const AlertComponent: React.FC<AlertProps> = ({
  children,
  ...props
}: AlertProps) => <Alert {...props}>{children}</Alert>;

export default AlertComponent;
