import ModalHeader, { ModalHeaderInterface } from './index';
import CloseIcon from '@mui/icons-material/Close';
import { Meta, Story } from '@storybook/react';

const ModalHeaderComponent = {
  title: 'Molecules/ModalHeader',
  component: ModalHeader,
  args: {},
} as Meta;

const Template = (args: ModalHeaderInterface) => (
  <ModalHeader {...args} />
);

export const MailModalHeader: Story<ModalHeaderInterface> =
  Template.bind({});

MailModalHeader.args = {
  variant: 'subtitle2',
  text: 'Pre-Adverse Action Notice',
  icon: <CloseIcon />,
  float: 'right',
};

export default ModalHeaderComponent;
