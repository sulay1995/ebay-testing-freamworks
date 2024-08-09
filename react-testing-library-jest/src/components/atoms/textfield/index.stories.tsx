import TextField, { TextFieldInterface } from './index';
import SearchIcon from '@mui/icons-material/Search';
import { Meta, Story } from '@storybook/react';

const TextFieldComponent = {
  title: 'Atoms/TextField',
  component: TextField,
} as Meta;

const Template = (args: TextFieldInterface) => (
  <TextField {...args} />
);

export const OutlineText: Story<TextFieldInterface> = Template.bind(
  {}
);

OutlineText.args = {
  variant: 'outlined',
  label: 'Filter',
  icon: <SearchIcon />,
};

export default TextFieldComponent;
