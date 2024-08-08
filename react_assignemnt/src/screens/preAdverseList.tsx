import React, { useEffect, useState } from 'react';
import Header from '../components/molecules/Header/index';
import Label from '../components/atoms/label/index';
import Button from '../components/atoms/button/index';
import DownloadIcon from '@mui/icons-material/Download';
import PaginationTable from '../components/organisms/paginatedTable/index';
import StatusHighlighter from '../components/atoms/statusHighlighter';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Box, styled } from '@mui/material';

const columns = [
  {
    field: 'name',
    headerName: 'NAME',
    width: 200,
    headerClassName: 'table-candidate-header',
    renderCell: (params: any) => (
      <Link
        to={'/candidate-info/' + params.row.candidateID}
        style={{ textDecoration: 'none' }}
      >
        {params.value}
      </Link>
    ),
    cellClassName: 'super-app-theme--cell',
  },
  {
    field: 'adjudication',
    headerName: 'ADJUDICATION',
    width: 200,
    headerClassName: 'table-candidate-header',
    renderCell: (params: any) =>
      params.value ? (
        <StatusHighlighter
          variant="subtitle2"
          text={params.value}
          backgroundColor={
            params.value === 'ENGAGE' ? '#F2FCFB' : '#FAF8EB'
          }
          textColor={
            params.value === 'ENGAGE' ? '#17A076' : '#A08817'
          }
          fontWeight={''}
        />
      ) : (
        '-'
      ),
    cellClassName: 'super-app-theme--cell',
  },
  {
    field: 'status',
    headerName: 'Status',
    headerClassName: 'table-candidate-header',
    renderCell: (params: any) => (
      <StatusHighlighter
        variant="subtitle2"
        text={params.value}
        backgroundColor={
          params.value === 'CLEAR' ? '#F2FCFB' : '#FAF8EB'
        }
        textColor={params.value === 'CLEAR' ? '#17A076' : '#A08817'}
        fontWeight={''}
      />
    ),
    width: 200,
    cellClassName: 'super-app-theme--cell',
  },
  {
    field: 'location',
    headerName: 'LOCATION',
    headerClassName: 'table-candidate-header',
    width: 200,
    cellClassName: 'super-app-theme--cell',
  },
  {
    field: 'dob',
    headerName: 'Date',
    headerClassName: 'table-candidate-header',
    width: 200,
    cellClassName: 'super-app-theme--cell',
  },
];

const ButtonBox = styled(Box)({
  display: 'flex',
  gap: '16px',
});

const CandidatePageBox = styled(Box)({
  paddingRight: '24px',
});

const PreAdverseList: React.FC = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/candidates').then((res) => {
      console.log('res', res.data);
      setRows(res.data);
    });
  }, []);
  return (
    <CandidatePageBox>
      <Header>
        <>
          <Label text="Candidate" variant="h5" />
          <ButtonBox>
            <Button
              title="Export"
              icon={<DownloadIcon />}
              justifyContent="left"
              color="secondary"
              backgroundColor="#FFFFFF"
            />
            <Button
              title="Manual Order"
              icon={<DownloadIcon />}
              justifyContent="left"
              variant="contained"
              backgroundColor="#224DFF"
              textColor="#FFFFFF"
            />
          </ButtonBox>
        </>
      </Header>
      <PaginationTable
        rows={rows}
        columns={columns}
        hideFooter={false}
        hideFooterPagination={false}
        hideFooterSelectedRowCount={false}
        title={'Candidate Information'}
        showFilter={true}
        height={'auto'}
        id={'candidateID'}
      />
    </CandidatePageBox>
  );
};

export default PreAdverseList;
