import PaginationTable, { TableInterface } from './index';
import StatusHighlighter from '../../atoms/statusHighlighter';
import './table.module.css';
import { Meta, Story } from '@storybook/react';
import { DataGridProps } from '@mui/x-data-grid';

const columns: DataGridProps['columns'] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 70,
    headerClassName: 'table-candidate-header',
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 140,
    headerClassName: 'table-candidate-header',
  },
  {
    field: 'status',
    headerName: 'Status',
    headerClassName: 'table-candidate-header',
    renderCell: (params) => (
      <StatusHighlighter
        variant="subtitle2"
        text={params.value}
        backgroundColor={
          params.value == 'Clear' ? '#F2FCFB' : '#FAF8EB'
        }
        textColor={params.value == 'Clear' ? '#17A076' : '#A08817'}
        fontWeight={''}
      />
    ),
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
    status: 'Consider',
    date: '2/22/2022',
  },
  {
    id: 5,
    name: 'County Criminal',
    status: 'Clear',
    date: '2/22/2022',
  },
];

const PaginationTableComponent = {
  title: 'Organisms/PaginationTable',
  component: PaginationTable,
  args: {},
} as Meta;

const Template = (args: TableInterface) => (
  <PaginationTable {...args} />
);

export const DataTable: Story<TableInterface> = Template.bind({});

DataTable.args = {
  rows,
  columns,
  hideFooter: false,
  hideFooterPagination: false,
  hideFooterSelectedRowCount: false,
  title: 'Court Searches',
  showFilter: false,
};

export default PaginationTableComponent;
