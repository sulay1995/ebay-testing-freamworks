import AppLayout from './AppLayout';
import GridViewIcon from '@mui/icons-material/GridView';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GavelIcon from '@mui/icons-material/Gavel';
import DescriptionIcon from '@mui/icons-material/Description';

const AppLayoutComponent = {
  title: 'Template/Applayout',
  component: AppLayout,
  args: {},
};

const Template = (args) => <AppLayout {...args} />;

export const CheckrAppLayout = Template.bind();
const menus = [
  {
    title: 'Home',
    icon: <GridViewIcon />,
    route: '',
  },
  {
    title: 'Candidate',
    icon: <PeopleAltIcon />,
    route: '',
  },
  {
    title: 'Adverse Action',
    icon: <GavelIcon />,
    route: '',
  },
  {
    title: 'Logs',
    icon: <DescriptionIcon />,
    route: '',
  },
  {
    title: 'Analytics',
    icon: <DescriptionIcon />,
    route: '',
  },
];

CheckrAppLayout.args = {
  menus,
};

export default AppLayoutComponent;
