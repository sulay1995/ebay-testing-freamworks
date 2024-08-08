import IconButton, { CustomIconButton } from './index';
import LogoutIcon from '@mui/icons-material/Logout';
import { Meta, Story } from '@storybook/react';

const ButtonComponent = {
  title: 'Atoms/IconButton',
  component: IconButton,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template = (args: CustomIconButton) => <IconButton {...args} />;

export const LogoutIconButton: Story<CustomIconButton> =
  Template.bind({});

LogoutIconButton.args = {
  icon: <LogoutIcon />,
  disabled: false,
};

export default ButtonComponent;
