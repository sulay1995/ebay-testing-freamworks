import Label, { TypographyPropsCustom } from './index';
import { Meta, Story } from '@storybook/react';

const LabelComponent = {
  title: 'Atoms/Label',
  component: Label,
  argTypes: {},
} as Meta;

const Template = (args: TypographyPropsCustom) => <Label {...args} />;

export const HeadingLabel: Story<TypographyPropsCustom> =
  Template.bind({});

HeadingLabel.args = {
  text: 'Hello',
  variant: 'h1',
};

export const TitleLabel: Story<TypographyPropsCustom> = Template.bind(
  {}
);

TitleLabel.args = {
  text: 'Hello',
  variant: 'subtitle1',
};

export default LabelComponent;
