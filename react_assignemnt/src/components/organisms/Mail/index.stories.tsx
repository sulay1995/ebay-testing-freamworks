import Mail, { MailInterface } from './index';
import { Meta, Story } from '@storybook/react';

const MailComponent = {
  title: 'Organisms/MailComponent',
  component: Mail,
  args: {},
} as Meta;

const Template = (args: MailInterface) => <Mail {...args} />;

export const MailStructure: Story<MailInterface> = Template.bind({});

MailStructure.args = {};

export default MailComponent;
