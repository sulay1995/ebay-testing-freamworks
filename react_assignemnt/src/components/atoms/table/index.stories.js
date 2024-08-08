import Table from './index';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const TableComponent = {
  title: 'Atoms/Table',
  component: Table,
  argTyps: {},
};

const columns = ['name', 'status', 'date'];

const rows = [
  {
    name: 'SSN Verification',
    status: 'Clear',
    date: '2/22/2022',
  },
  {
    name: 'Sex Offender',
    status: 'Clear',
    date: '2/22/2022',
  },
  {
    name: 'Global Watchlist',
    status: 'Clear',
    date: '2/22/2022',
  },
  {
    name: 'Fedral Criminal',
    status: 'Clear',
    date: '2/22/2022',
  },
  {
    name: 'County Criminal',
    status: 'Clear',
    date: '2/22/2022',
  },
];

const Template = (args) => <Table {...args}></Table>;

export const BasicTable = Template.bind({});

const TableBody1 = () => {
  return rows.map((row) => (
    <TableRow
      key={row.name}
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
      }}
    >
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell component="th" scope="row">
        {row.status}
      </TableCell>
      <TableCell component="th" scope="row">
        {row.date}
      </TableCell>
    </TableRow>
  ));
};

BasicTable.args = {
  rows: rows,
  columns: columns,
  tbody: <TableBody1 />,
};

export default TableComponent;
