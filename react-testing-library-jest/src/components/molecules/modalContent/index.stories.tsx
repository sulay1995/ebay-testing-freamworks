import Label from '../../atoms/label/index';
import MailSubject from '../MailSubject/index';
import ModalContent from './index';
import { Meta, Story } from '@storybook/react';
import { BoxProps } from '@mui/material';

const ModalcontentComponent = {
  title: 'Molecules/ModalContent',
  component: ModalContent,
  args: {},
} as Meta;

const Template = (args: BoxProps) => <ModalContent {...args} />;

export const PreAdverseMailMOdalContent: Story<BoxProps> =
  Template.bind({});

PreAdverseMailMOdalContent.args = {
  children: (
    <>
      <MailSubject
        keys="From"
        value="kyle@checkr.com"
        valueFontWeight="Bold"
        textColor=""
        variant="subtitle2"
        keyFontWeight="normal"
        showBorderBottom={false}
      />
      <Label text="hello" variant="subtitle2" />
    </>
  ),
};

export default ModalcontentComponent;
