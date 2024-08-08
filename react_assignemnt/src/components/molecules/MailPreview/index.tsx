import React from 'react';
import { Box } from '@mui/system';
import MailSubject from '../MailSubject';
import AlertComponent from '../../atoms/Alert';
import Label from '../../atoms/label/index';
import styled from '@emotion/styled';

const NameBox = styled(Box)({
  display: 'flex',
});

export interface Preview {
  name: string;
  charges: string[];
}

const MailPreview: React.FC<Preview> = (props: Preview) => (
  <Box>
    <MailSubject
      keys="From"
      value="kyle@checkr.com"
      showBorderBottom={false}
    />
    <MailSubject
      keys="To"
      value="john.smith@checkr.com"
      showBorderBottom={false}
    />
    <MailSubject
      keys="Subject"
      value=" Pre-adverse action notice - checkr-bpo"
      showBorderBottom={false}
    />
    <AlertComponent severity="error" icon={false}>
      <ul>
        <li>
          <Label
            text="Please carefully review the list of charges (in bold) and your contact information"
            variant="subtitle2"
          />
        </li>
        <li>
          {' '}
          <Label
            text="Please note that we will send the corresponding post adverse action email automatically after 7 days."
            variant="subtitle2"
          />
        </li>
      </ul>
    </AlertComponent>
    <NameBox>
      <Label text="Dear " variant="subtitle2" />
      <Label text={props.name} variant="subtitle2" />
    </NameBox>
    <br />
    <Label
      text="You recently authorized checkr-bpo (“the company”) to obtain consumer reports and/or invistigate consumer reportsabout you from a consumer reporting agency. The Company is considering taking action in whole or in past on information in such report(s) including the following specific items identified in the report prepared by Checkr, Inc."
      variant="subtitle2"
    />
    <ul>
      {props.charges.map((item: string) => (
        <li key={item}>
          <Label text={item} />
        </li>
      ))}
    </ul>
    <Label
      text="If you wish to dispute the accuracy of the information in the report directly with the consumer reporting agency (i.e., the source of the informationcontained in the report), you should contact the agency identifield above directly"
      variant="subtitle2"
    />{' '}
    <br />
    <Label text=" Sincerely" variant="subtitle2" />
    <Label text="Checkr-bpo" variant="subtitle2" />
  </Box>
);

export default MailPreview;
