import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';

const TableComponent: React.FC<any> = ({ tbody, ...props }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {props.columns.map((item: string) => (
              <TableCell key={item}>{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{tbody}</TableBody>
      </Table>
    </TableContainer>
  );
};

TableComponent.propTypes = {
  tbody: PropTypes.any.isRequired,
  rows: PropTypes.any.isRequired,
  columns: PropTypes.any.isRequired,
};

TableComponent.defaultProps = {
  tbody: null,
  rows: [],
  columns: [],
};

export default TableComponent;
