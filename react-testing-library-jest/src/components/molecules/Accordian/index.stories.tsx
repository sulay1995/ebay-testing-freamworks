import Accordion from './index';
import AccordionDetails from '../../atoms/AccordianDetails/index';
import AccordionSummary from '../../atoms/AccordianSummary/index';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CandidateDetailCard from '../candidateDetailCard/index';
import PersonIcon from '@mui/icons-material/Person';
import Grid from '@mui/material/Grid';
import { Meta, Story } from '@storybook/react';
import { AccordionProps } from '@mui/material';

const AccorionComponent = {
  title: 'Molecules/Accordion',
  component: Accordion,
  args: {},
} as Meta;

const Template = (args: AccordionProps) => (
  <Accordion {...args}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      Testing
    </AccordionSummary>
    <AccordionDetails>
      {[1, 2, 3, 4].map((item) => item)}
    </AccordionDetails>
  </Accordion>
);

export const DefaultAccordion: Story<AccordionProps> = Template.bind(
  {}
);

DefaultAccordion.args = {};

const Template1 = (args: AccordionProps) => (
  <Accordion {...args}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      Candidate Information
    </AccordionSummary>
    <AccordionDetails>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CandidateDetailCard
            icon={<PersonIcon />}
            titleVariant={'subtitle1'}
            infoVariant={'subtitle1'}
            title={'Name'}
            info={'John Smith'}
            disable={false}
          />
        </Grid>
        <Grid item xs={4}>
          <CandidateDetailCard
            icon={<PersonIcon />}
            titleVariant={'subtitle1'}
            infoVariant={'subtitle1'}
            title={'Name'}
            info={'John Smith'}
            disable={false}
          />
        </Grid>
        <Grid item xs={4}>
          <CandidateDetailCard
            icon={<PersonIcon />}
            titleVariant={'subtitle1'}
            infoVariant={'subtitle1'}
            title={'Name'}
            info={'John Smith'}
            disable={false}
          />
        </Grid>
      </Grid>
    </AccordionDetails>
  </Accordion>
);

export const CandidateInfoAccordian: Story<AccordionProps> =
  Template1.bind({});

CandidateInfoAccordian.args = {};

export default AccorionComponent;
