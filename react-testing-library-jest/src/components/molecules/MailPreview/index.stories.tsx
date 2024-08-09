import MailPreview, { Preview } from './index';
import { Meta, Story } from '@storybook/react';

const MailPreviewComponent = {
  title: 'Molecules/MailPreview',
  component: MailPreview,
  args: {},
} as Meta;

const Template = (args: Preview) => <MailPreview {...args} />;

export const AdverseMailPreview: Story<Preview> = Template.bind({});

AdverseMailPreview.args = {
  name: 'sulay',
  charges: ['Assault Domestic Violence'],
};

export default MailPreviewComponent;
