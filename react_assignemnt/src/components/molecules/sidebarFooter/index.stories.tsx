import SidebarFooter, { SidebarFooterInterface } from './index';
import LogoutIcon from '@mui/icons-material/Logout';
import { Meta, Story } from '@storybook/react';

const SidebarFooterComponent = {
  title: 'Molecules/SidebarFooter',
  component: SidebarFooter,
  args: {},
} as Meta;

const Template = (args: SidebarFooterInterface) => (
  <SidebarFooter {...args} />
);

export const FooterSidebar: Story<SidebarFooterInterface> =
  Template.bind({});

FooterSidebar.args = {
  image: 'images/img_avatar.png',
  alt: 'profile picture',
  nameVariant: 'subtitle1',
  companyVariant: 'subtitle2',
  icon: <LogoutIcon />,
  name: 'James Rodriguez',
  company: 'James Co.',
  disable: false,
  color: 'primary',
};

export default SidebarFooterComponent;
