import PaginatedTable from '../../organisms/paginatedTable/index';
import MuiBox from '@mui/material/Box';
import Label from '../../atoms/label/index';
import { styled, TypographyProps } from '@mui/material';
import { DataGridProps } from '@mui/x-data-grid';

const Box = styled(MuiBox)({
  gap: 10,
  backgroundColor: '#FFFFFF',
  border: 1,
});

export interface CourtSearches {
  varient: TypographyProps['variant'];
  text: string;
  textColor: string;
  rows: DataGridProps['rows'];
  columns: DataGridProps['columns'];
  hideFooter: boolean;
  hideFooterPagination: boolean;
  hideFooterSelectedRowCount: boolean;
  fontWeight: string;
}

const CourtSearchesTable: React.FC<CourtSearches> = (
  props: CourtSearches
) => (
  <Box>
    <span style={{ display: 'flex', height: '50px' }}>
      <Label
        variant={props.varient}
        text={props.text}
        textColor={props.textColor}
        fontWeight={props.fontWeight}
      ></Label>
    </span>
    <PaginatedTable
      rows={props.rows}
      columns={props.columns}
      hideFooter={props.hideFooter}
      hideFooterPagination={props.hideFooterPagination}
      hideFooterSelectedRowCount={props.hideFooterSelectedRowCount}
      title={''}
      showFilter={false}
    />
  </Box>
);

export default CourtSearchesTable;
