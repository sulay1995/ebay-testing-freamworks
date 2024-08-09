import MailSubject, { MailSubjectInterface } from './index';
import { Meta, Story } from '@storybook/react';

const MailSubjectComponent = {
  title: 'Molecules/MailSubject',
  component: MailSubject,
  args: {},
} as Meta;

const Template = (args: MailSubjectInterface) => (
  <MailSubject {...args} />
);

export const FromMail: Story<MailSubjectInterface> = Template.bind(
  {}
);

FromMail.args = {
  keys: 'From',
  value: 'kyle@checkr.com',
  valueFontWeight: 'Bold',
  textColor: '',
  variant: 'subtitle2',
  keyFontWeight: 'normal',
};

export default MailSubjectComponent;
