import * as React from 'react';
import Grid from '@mui/material/Grid';
import Sidenav, {
  SidenavINterface,
} from '../organisms/Sidenav/index';
import { Box } from '@mui/system';
import GridViewIcon from '@mui/icons-material/GridView';
import LogoutIcon from '@mui/icons-material/Logout';

import { Outlet } from 'react-router-dom';
interface LayoutInterface extends SidenavINterface {}

const AppTemplate: React.FC<LayoutInterface> = (
  props: LayoutInterface
) => {
  return (
    <Box style={{ backgroundColor: '#CECECE' }}>
      <Grid container spacing={2}>
        <Grid item xs={2} style={{ height: '100vh' }}>
          <Sidenav
            text="Recruit"
            textColor="#3E5FE2"
            variant="h4"
            fontWeight=" bold"
            buttonVariant="text"
            icon={<GridViewIcon />}
            fullWidth={true}
            justifyContent=" left"
            image="images/img_avatar.png"
            alt=" profile picture"
            nameVariant="subtitle1"
            companyVariant="subtitle2"
            footerIcon={<LogoutIcon />}
            name={props.name}
            company=" James Co."
            disable={false}
            color="primary"
            menus={props.menus}
          />
        </Grid>
        <Grid item xs={10}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppTemplate;
