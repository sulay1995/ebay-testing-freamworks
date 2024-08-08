import {
  AccordionDetails,
  AccordionDetailsProps,
} from '@mui/material';

const AccordionDetailsComponent: React.FC<AccordionDetailsProps> = ({
  children,
  ...props
}: AccordionDetailsProps) => (
  <AccordionDetails {...props}>{children}</AccordionDetails>
);

export default AccordionDetailsComponent;
