import Model, { ModelInterface } from './index';
import Mail from '../Mail/index';
import { Meta, Story } from '@storybook/react';

const ModelComponent = {
  title: 'Organisms/Model',
  component: Model,
  args: {},
} as Meta;

const Template = (args: ModelInterface) => <Model {...args} />;

export const MailModel: Story<ModelInterface> = Template.bind({});

MailModel.args = {
  children: <Mail mailFooter={false} />,
  title: 'Pre-Adverse Action Notice',
  modelHeader: true,
  modelFooter: true,
};

export default ModelComponent;
