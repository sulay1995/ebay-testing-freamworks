import Avtar from './index';
import { Meta, Story } from '@storybook/react';

const AvtarComponent = {
  title: 'Atoms/Avtar',
  component: Avtar,
  argsTypes: {},
} as Meta;

interface AvtartInterface {
  src: string;
}

const Template = (args: AvtartInterface) => <Avtar {...args} />;

export const ProfileAvtar: Story<AvtartInterface> = Template.bind({});

ProfileAvtar.args = {
  src: 'images/img_avatar.png',
};

export default AvtarComponent;
