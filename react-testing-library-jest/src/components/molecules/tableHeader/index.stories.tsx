import TableHeader, { TableHeaderInterface } from './index';
import { Meta, Story } from '@storybook/react';

const TabelHaderComponent = {
  title: 'Molecules/TableHeader',
  component: TableHeader,
  args: {},
} as Meta;

const Template = (args: TableHeaderInterface) => (
  <TableHeader {...args} />
);

export const CourtSearchTable: Story<TableHeaderInterface> =
  Template.bind({});

CourtSearchTable.args = {
  title: 'Court Searches',
  variant: 'h6',
  textColor: 'black',
  fontWeight: 'normal',
  showFilter: true,
};

export default TabelHaderComponent;
