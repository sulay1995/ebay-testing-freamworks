import { Box, styled } from '@mui/material';
import {
  DataGrid as MuiDataGrid,
  DataGridProps,
} from '@mui/x-data-grid';
import TableHeader from '../../molecules/tableHeader';

const TableBox = styled(Box)({
  '.MuiDataGrid-main': {
    backgroundColor: '#FFFFFF',
  },
  '.MuiDataGrid-columnHeaders': {
    backgroundColor: '#E5E7ED',
  },
  '.MuiDataGrid-footerContainer': {
    backgroundColor: '#FFFFFF',
  },
});

const DataGrid = styled(MuiDataGrid)({
  height: 'fit-content',
  minHeight: '35vh',
  '& .MuiDataGrid-virtualScroller': {
    minHeight: '50vh',
  },
});

export interface TableInterface extends DataGridProps {
  rows: DataGridProps['rows'];
  columns: DataGridProps['columns'];
  hideFooter: boolean;
  hideFooterPagination: boolean;
  hideFooterSelectedRowCount: boolean;
  title: string;
  showFilter: boolean;
  height?: string;
  id?: string;
}

const DataTable: React.FC<TableInterface> = (
  props: TableInterface
) => {
  return (
    <div style={{ height: props.height, width: '100%' }}>
      <TableHeader
        title={props.title}
        variant="h6"
        textColor="balck"
        fontWeight="normal"
        label=""
        showFilter={props.showFilter}
      />
      <TableBox>
        <DataGrid
          rows={props.rows}
          columns={props.columns}
          hideFooter={props.hideFooter}
          hideFooterPagination={props.hideFooterPagination}
          hideFooterSelectedRowCount={
            props.hideFooterSelectedRowCount
          }
          getRowId={(row: any) => {
            return row.created_at || row.createdAt;
          }}
        />
      </TableBox>
    </div>
  );
};

DataTable.defaultProps = {
  rows: [],
  columns: [],
  hideFooter: false,
  hideFooterPagination: false,
  hideFooterSelectedRowCount: false,
  title: '',
  height: 'auto',
  id: 'id',
};

export default DataTable;
