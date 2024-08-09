import Sidenav, { SidenavINterface, Menus } from './index';
import GridViewIcon from '@mui/icons-material/GridView';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GavelIcon from '@mui/icons-material/Gavel';
import DescriptionIcon from '@mui/icons-material/Description';
import { Meta, Story } from '@storybook/react';

const SidenavComponent = {
  title: 'Organisms/Sidenav',
  component: Sidenav,
  args: {},
} as Meta;

const menus: Array<Menus> = [
  {
    title: 'Home',
    icon: <GridViewIcon />,
    route: '',
    name: 'home',
  },
  {
    title: 'Candidate',
    icon: <PeopleAltIcon />,
    route: '',
    name: 'candidate',
  },
  {
    title: 'Adverse Action',
    icon: <GavelIcon />,
    route: '',
    name: 'adverse-action',
  },
  {
    title: 'Logs',
    icon: <DescriptionIcon />,
    route: '',
    name: 'logs',
  },
];

const Template = (args: SidenavINterface) => <Sidenav {...args} />;

export const DefaultSidenav: Story<SidenavINterface> = Template.bind(
  {}
);

DefaultSidenav.args = {
  text: 'Recruit',
  textColor: '',
  variant: 'h4',
  fontWeight: 'bold',
  buttonVariant: 'text',
  icon: <GridViewIcon />,
  title: 'Home',
  fullWidth: true,
  justifyContent: 'left',
  image: 'images/img_avatar.png',
  alt: 'profile picture',
  nameVariant: 'subtitle1',
  companyVariant: 'subtitle2',
  footerIcon: <LogoutIcon />,
  name: 'James Rodriguez',
  company: 'James Co.',
  disable: false,
  color: 'primary',
  menus,
};

export default SidenavComponent;
