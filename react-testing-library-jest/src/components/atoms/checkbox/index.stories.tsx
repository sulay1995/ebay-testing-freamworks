import CheckboxLabel, { CustomCheckbox } from './index';
import { Meta, Story } from '@storybook/react';

const CheckboxLabelComponent = {
  title: 'Atoms/Checkbox',
  component: CheckboxLabel,
  argTypes: { onChange: { action: 'change' } },
} as Meta;

const Template = (args: CustomCheckbox) => (
  <CheckboxLabel {...args} />
);

export const DrivingCheckbox: Story<CustomCheckbox> = Template.bind(
  {}
);

const onChecked = () => alert('changed');

DrivingCheckbox.args = {
  label: 'Driving while license suspended',
  disabled: false,
  defaultChecked: false,
  onChange: onChecked,
};

export default CheckboxLabelComponent;
