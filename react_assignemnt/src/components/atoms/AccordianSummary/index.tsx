import {
  AccordionSummary,
  AccordionSummaryProps,
} from '@mui/material';

const AccordionSummaryComponent: React.FC<AccordionSummaryProps> = ({
  children,
  ...props
}: AccordionSummaryProps) => (
  <AccordionSummary
    {...props}
    sx={{ borderBottom: '1px solid #E5E7ED' }}
  >
    {children}
  </AccordionSummary>
);

export default AccordionSummaryComponent;
