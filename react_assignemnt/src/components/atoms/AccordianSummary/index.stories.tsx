import AccordionSummary from './index';
import CloseIcon from '@mui/icons-material/Close';
import { Meta, Story } from '@storybook/react';

const AccordionDetailsComponent = {
  title: 'Atoms/AccordianSummary',
  component: AccordionSummary,
  args: {},
} as Meta;

interface AccordionSummaryInterface {
  children: string;
  expandIcon: JSX.Element;
}

const Template = (args: AccordionSummaryInterface) => (
  <AccordionSummary {...args} />
);

export const DefaultAccordianDetails: Story<AccordionSummaryInterface> =
  Template.bind({});

DefaultAccordianDetails.args = {
  children: 'Candidate Info',
  expandIcon: <CloseIcon />,
};

export default AccordionDetailsComponent;
