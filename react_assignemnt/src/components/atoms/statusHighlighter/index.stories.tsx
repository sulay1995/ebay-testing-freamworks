import StatusHighlighter, {
  StatusHighlighterInterface,
} from './index';
import { Meta, Story } from '@storybook/react';

const StatusHighlighterComponent = {
  title: 'Atoms/StatusHighlighter',
  component: StatusHighlighter,
  args: {},
} as Meta;

const Template = (args: StatusHighlighterInterface) => (
  <StatusHighlighter {...args} />
);

export const SuccessStatusHighlighter: Story<StatusHighlighterInterface> =
  Template.bind({});

SuccessStatusHighlighter.args = {
  variant: 'subtitle2',
  text: 'CLEAR',
  backgroundColor: '#F2FCFB',
  textColor: '#17A076',
};

export default StatusHighlighterComponent;
