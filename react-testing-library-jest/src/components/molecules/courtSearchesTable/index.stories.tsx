import CourtSearchesTable, { CourtSearches } from './index';
import { Meta, Story } from '@storybook/react';

const CourtSearchesTableComponent = {
  title: 'Molecules/CourtSearchesTable',
  component: CourtSearchesTable,
  args: {},
} as Meta;

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 70,
    headerClassName: 'table-candidate-header',
  },
  {
    field: 'name',
    headerName: 'Search',
    width: 140,
    headerClassName: 'table-candidate-header',
  },
  {
    field: 'status',
    headerName: 'Status',
    headerClassName: 'table-candidate-header',
  },
  {
    field: 'date',
    headerName: 'Date',
    headerClassName: 'table-candidate-header',
  },
];

const rows = [
  {
    id: 1,
    name: 'SSN Verification',
    status: 'Clear',
    date: '2/22/2022',
  },
  {
    id: 2,
    name: 'Sex Offender',
    status: 'Clear',
    date: '2/22/2022',
  },
  {
    id: 3,
    name: 'Global Watchlist',
    status: 'Clear',
    date: '2/22/2022',
  },
  {
    id: 4,
    name: 'Fedral Criminal',
    status: 'Clear',
    date: '2/22/2022',
  },
  {
    id: 5,
    name: 'County Criminal',
    status: 'Clear',
    date: '2/22/2022',
  },
];

const Template = (args: CourtSearches) => (
  <CourtSearchesTable {...args} />
);

export const DefaultCourtSearchesTable: Story<CourtSearches> =
  Template.bind({});

DefaultCourtSearchesTable.args = {
  varient: 'subtitle2',
  text: 'Court Searches',
  textColor: '#000000',
  columns,
  rows,
  hideFooter: true,
  hideFooterPagination: true,
  hideFooterSelectedRowCount: true,
};

export default CourtSearchesTableComponent;
