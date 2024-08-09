import DatePicker from './index';
import moment from 'moment';
import { Meta, Story } from '@storybook/react';

let dateValue = moment().format('DD/MM/YYYY');

const DatePIckerComponent = {
  title: 'Atoms/DatePicker',
  component: DatePicker,
} as Meta;

interface DataPickerInterface {
  label: string;
  value: string;
  handleChange: VoidFunction;
}

const Template = (args: any) => <DatePicker {...args} />;

export const DefaultDatePicker: Story<DataPickerInterface> =
  Template.bind({});

DefaultDatePicker.args = {
  label: 'To',
  value: dateValue,
  handleChange: () => {},
};

export default DatePIckerComponent;
