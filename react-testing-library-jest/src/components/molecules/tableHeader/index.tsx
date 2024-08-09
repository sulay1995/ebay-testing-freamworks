import React from 'react';
import MuiBox from '@mui/material/Box';
import { styled, TypographyProps } from '@mui/material';
import Label from '../../atoms/label/index';
import TextField from '../../atoms/textfield/index';
import SearchIcon from '@mui/icons-material/Search';
import Button from '../../atoms/button';
import FilterListIcon from '@mui/icons-material/FilterList';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Box = styled(MuiBox)({
  display: 'flex',
  paddingTop: 15,
  paddingBottom: 15,
  paddingLeft: 20,
  paddingRight: 20,
  gap: 10,
  backgroundColor: '#FFFFFF',
  background: '#FFFFFF',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
});

const FilterBox = styled(MuiBox)({
  display: 'flex',
  gap: '16px',
});

export interface TableHeaderInterface {
  title: string;
  variant: TypographyProps['variant'];
  textColor: string;
  fontWeight: string;
  label: string;
  showFilter: boolean;
}
const TableHeader: React.FC<TableHeaderInterface> = (
  props: TableHeaderInterface
) => (
  <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
    <Label
      text={props.title}
      variant={props.variant}
      textColor={props.textColor}
      fontWeight={props.fontWeight}
    />
    {props.showFilter ? (
      <FilterBox>
        <TextField
          icon={<SearchIcon />}
          variant="outlined"
          label=""
          onChange={function () {}}
          padding="0px"
        />
        <Button
          title="Filter"
          icon={<FilterListIcon />}
          fullWidth={false}
          justifyContent="right"
          textColor="black"
          backgroundColor=""
          borderColor="#E5E7ED"
        ></Button>
        <Button
          title=""
          icon={<MoreVertIcon />}
          fullWidth={false}
          justifyContent="right"
          textColor="black"
          backgroundColor=""
          borderColor="#E5E7ED"
        ></Button>
      </FilterBox>
    ) : (
      ''
    )}
  </Box>
);

export default TableHeader;
