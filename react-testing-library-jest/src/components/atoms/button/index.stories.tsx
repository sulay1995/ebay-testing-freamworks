import React from 'react';
import Button from './index';
import DownloadIcon from '@mui/icons-material/Download';
import { ComponentStory } from '@storybook/react';

const ButtonComponent = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    onClick: {
      name: 'onClick',
      action: 'Button Click',
      description:
        'This is Function, when user click on Button that time it will be called',
      table: {
        type: { summary: 'function', detail: '(event) => {}' },
      },
    },
  },
};

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  title: 'Primary button',
};

export const PrimaryButtonDisabled = Template.bind({});
PrimaryButtonDisabled.args = {
  title: 'Disabled Button',
  disabled: true,
};

export const ButtonWithIcon = Template.bind({});

ButtonWithIcon.args = {
  title: 'Export',
  icon: <DownloadIcon />,
};

export const ButtonWithIconWithFullWidth = Template.bind({});

const clicked = () => alert('button click');

ButtonWithIconWithFullWidth.args = {
  title: 'Export',
  icon: <DownloadIcon />,
  fullWidth: true,
  justifyContent: 'left',
  onClick: clicked,
};

export default ButtonComponent;
