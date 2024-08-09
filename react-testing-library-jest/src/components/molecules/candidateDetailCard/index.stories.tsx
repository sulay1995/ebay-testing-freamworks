import CandiateDetailCard, {
  CandidateDetailInterface,
} from './index';
import PersonIcon from '@mui/icons-material/Person';
import { Meta, Story } from '@storybook/react';

const CandiateDetailCardComponent = {
  title: 'Molecules/CandiateDetailCard',
  component: CandiateDetailCard,
  args: {},
} as Meta;

const Template = (args: CandidateDetailInterface) => (
  <CandiateDetailCard {...args} />
);

export const DefaultCandidateCard: Story<CandidateDetailInterface> =
  Template.bind({});

DefaultCandidateCard.args = {
  icon: <PersonIcon />,
  titleVariant: 'subtitle1',
  infoVariant: 'subtitle1',
  title: 'Name',
  info: 'John Smith',
  disable: false,
};

export default CandiateDetailCardComponent;
