import AccordionDetails from './index';
import { Meta, Story } from '@storybook/react';

const AccordionDetailsComponent = {
  title: 'Atoms/AccordianDetails',
  component: AccordionDetails,
  args: {},
} as Meta;

interface AccordianDetailsInterface {
  children: string;
}

const Template = (args: AccordianDetailsInterface) => (
  <AccordionDetails {...args} />
);

export const DefautAccordionDetails: Story<AccordianDetailsInterface> =
  Template.bind({});

DefautAccordionDetails.args = {
  children: 'Testing',
};

export default AccordionDetailsComponent;
