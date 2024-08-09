import Alert from './index';
import Label from '../label/index';
import { Meta, Story } from '@storybook/react';
import { AlertProps } from '@mui/material';

const AlertComponent = {
  title: 'Atoms/Alert',
  component: Alert,
  args: {},
} as Meta;

const Template = (args: AlertProps) => <Alert {...args} />;

export const MailAlert: Story<AlertProps> = Template.bind({});

MailAlert.args = {
  severity: 'error',
  icon: false,
  children: (
    <ul>
      <li>
        <Label
          text="Please carefully review the list of charges (in bold) and your contact information"
          variant="subtitle2"
        />
      </li>
      <li>
        {' '}
        <Label
          text="Please note that we will send the corresponding post adverse action email automatically after 7 days."
          variant="subtitle2"
        />
      </li>
    </ul>
  ),
};

export default AlertComponent;
