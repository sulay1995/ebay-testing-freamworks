import React, { useEffect, useState } from 'react';
import Header from '../components/molecules/Header/index';
import Label from '../components/atoms/label/index';
import Button from '../components/atoms/button/index';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Accordion from '../components/molecules/Accordian/index';
import AccordionDetails from '../components/atoms/AccordianDetails/index';
import AccordionSummary from '../components/atoms/AccordianSummary/index';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CandidateDetailCard from '../components/molecules/candidateDetailCard/index';
import PersonIcon from '@mui/icons-material/Person';
import PaginationTable from '../components/organisms/paginatedTable/index';
import StatusHighlighter from '../components/atoms/statusHighlighter';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import MuiBox from '@mui/material/Box';
import { styled } from '@mui/material';

const Box = styled(MuiBox)({
  margin: 20,
});

const ButtonBox = styled(MuiBox)({
  display: 'flex',
  gap: '16px',
});

interface CandidateInfoInterface {
  title: string;
  value: string;
  icon: JSX.Element;
}

const columns = [
  {
    field: 'candidateID',
    headerName: 'Searches',
    width: 200,
    headerClassName: 'table-candidate-header',
    renderCell: (params: any) => (
      <span>{params.row.court_searches[0].name}</span>
    ),
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
  },
  {
    field: 'createdAt',
    headerName: 'DATE',
    width: 200,
    headerClassName: 'table-candidate-header',
  },
];

const CandidateInfo: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [candidateInfo, setCandidateInfo]: any = useState([]);
  const [candidate, setCandidate]: any = useState({});
  const [candidateReport, setCandidateReport]: any = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/candidates/' + id)
      .then((res) => {
        console.log('res', res.data);
        setCandidate(res.data.candidate);
        setRows(res.data.ChargesList);

        setCandidateInfo([
          {
            title: 'Name',
            value: res.data.candidate.name,
            icon: <PersonIcon />,
          },
          {
            title: 'Email',
            value: res.data.candidate.email,
            icon: <PersonIcon />,
          },
          {
            title: 'DOB',
            value: res.data.candidate.dob,
            icon: <PersonIcon />,
          },
          {
            title: 'Phone',
            value: res.data.candidate.phone,
            icon: <PersonIcon />,
          },
          {
            title: 'Zipcode',
            value: res.data.candidate.zipcode,
            icon: <PersonIcon />,
          },
          {
            title: 'Social Security',
            value: res.data.candidate.social_security,
            icon: <PersonIcon />,
          },
          {
            title: 'Created At',
            value: res.data.candidate.created_at,
            icon: <PersonIcon />,
          },
        ]);

        setCandidateReport([
          {
            title: 'Status',
            value: res.data.candidate.status,
            icon: <PersonIcon />,
          },
          {
            title: 'Adjudication',
            value: res.data.candidate.adjudication,
            icon: <PersonIcon />,
          },
          {
            title: 'Package',
            value: res.data.candidate.packge,
            icon: <PersonIcon />,
          },
          {
            title: 'Created At',
            value: res.data.candidate.created_at,
            icon: <PersonIcon />,
          },
          {
            title: 'Completed Date',
            value: 'Dec 4 2023 12:00:00PM',
            icon: <PersonIcon />,
          },
          {
            title: 'Turn Around Time',
            value: '1 Day 12 hours',
            icon: <PersonIcon />,
          },
        ]);
      });
  }, [id]);

  function engage() {
    axios
      .patch('http://localhost:3001/candidates/engage/' + id)
      .then((res) => {
        navigate('/candidate');
      });
  }

  return (
    <Box>
      <Header>
        <>
          <div style={{ display: 'flex' }}>
            <Link to="/candidate">
              <ArrowBackIcon />
            </Link>
            <Label
              text={candidate.name}
              padding="0px 10px"
              variant="h5"
            />
          </div>
          <ButtonBox>
            <Link
              to={'/candidate/pre-adverse/' + id}
              style={{ textDecoration: 'none' }}
            >
              <Button
                title="Pre-Adverse Action"
                icon={<></>}
                justifyContent="left"
                backgroundColor="#FFFFFF"
              />
            </Link>
            <Button
              title="Engage"
              icon={<></>}
              justifyContent="left"
              variant="contained"
              onClick={engage}
              backgroundColor="#224DFF"
              textColor="#FFFFFF"
            />
          </ButtonBox>
        </>
      </Header>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Candidate Information
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            {candidateInfo.map((item: CandidateInfoInterface) => (
              <Grid item xs={4} key={item.title}>
                <CandidateDetailCard
                  icon={item.icon}
                  title={item.title}
                  info={item.value}
                  disable={false}
                />
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Report Information
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            {candidateReport.map((item: CandidateInfoInterface) => (
              <Grid item xs={4} key={item.title}>
                <CandidateDetailCard
                  icon={item.icon}
                  title={item.title}
                  info={item.value}
                  disable={false}
                />
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <>
        <PaginationTable
          rows={rows}
          columns={columns}
          hideFooter={true}
          hideFooterPagination={true}
          hideFooterSelectedRowCount={true}
          title={'Court Searches'}
          showFilter={false}
        />
      </>
    </Box>
  );
};

export default CandidateInfo;
