import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/AppLayout';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GavelIcon from '@mui/icons-material/Gavel';
import DescriptionIcon from '@mui/icons-material/Description';
import GridViewIcon from '@mui/icons-material/GridView';
import { Menus } from './components/organisms/Sidenav';
import PreAdverseList from './screens/preAdverseList';
import CandidateInfo from './screens/CandidateInfo';
import PreAdverseAction from './screens/preAdverseAction';

const menus = [
  {
    title: 'Home',
    icon: <GridViewIcon />,
    route: '/',
    name: '',
  },
  {
    title: 'Candidate',
    icon: <PeopleAltIcon />,
    route: '/candidate',
    name: 'candidate',
  },
  {
    title: 'Adverse Action',
    icon: <GavelIcon />,
    route: 'adverse-action',
    name: 'adverse-action',
  },
  {
    title: 'Logs',
    icon: <DescriptionIcon />,
    route: 'logs',
    name: 'logs',
  },
  {
    title: 'Analytics',
    icon: <DescriptionIcon />,
    route: 'analytics',
    name: 'analytics',
  },
];

const MainRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            menus={menus as Menus[]}
            text={'Recruit'}
            textColor={'#3E5FE2'}
            variant={undefined}
            fontWeight={''}
            icon={<></>}
            title={''}
            buttonVariant={undefined}
            fullWidth={false}
            justifyContent={''}
            image={''}
            nameVariant={undefined}
            companyVariant={undefined}
            footerIcon={<></>}
            alt={''}
            name="James Rodriguez"
            company={''}
            color={undefined}
            disable={false}
          />
        }
      >
        <Route path="/candidate" element={<PreAdverseList />}></Route>
        <Route path="/candidate-info/:id" element={<CandidateInfo />}>
          {' '}
        </Route>
        <Route
          path="/candidate/pre-adverse/:id"
          element={<PreAdverseAction />}
        ></Route>
      </Route>
    </Routes>
  );
};

export default MainRouter;
