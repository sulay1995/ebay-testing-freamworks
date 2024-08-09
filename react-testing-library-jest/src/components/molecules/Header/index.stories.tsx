import Header from './index';
import Label from '../../atoms/label/index';
import Button from '../../atoms/button/index';
import DownloadIcon from '@mui/icons-material/Download';
import { Meta, Story } from '@storybook/react';
import { BoxProps } from '@mui/material';

const HeaderComponent = {
  title: 'Molecules/Header',
  component: Header,
  args: {},
} as Meta;

const Template = (args: BoxProps) => <Header {...args} />;

export const CandidateHeader: Story<BoxProps> = Template.bind({});

CandidateHeader.args = {
  children: (
    <>
      <Label text="Candidate" />
      <div>
        <Button
          title="Export"
          icon={<DownloadIcon />}
          justifyContent="left"
        />
        <Button
          title="Manual Order"
          icon={<DownloadIcon />}
          justifyContent="left"
          color="info"
          variant="contained"
        />
      </div>
    </>
  ),
};

export default HeaderComponent;
