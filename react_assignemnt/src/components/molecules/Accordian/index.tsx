import { Accordion, AccordionProps, styled } from '@mui/material';

const CandidateInfoAccordian = styled(Accordion)({
  marginBottom: 20,
});

const AccordionComponent: React.FC<AccordionProps> = ({
  children,
  ...props
}: AccordionProps) => (
  <CandidateInfoAccordian {...props}>
    {children}
  </CandidateInfoAccordian>
);

export default AccordionComponent;
