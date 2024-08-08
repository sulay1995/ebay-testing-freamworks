import React from 'react';
import MuiBox from '@mui/material/Box';
import { styled } from '@mui/material';
import MailSubjectComponent from '../../molecules/MailSubject/index';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '../../atoms/checkbox/index';
import LabelComponent from '../../atoms/label/index';
import TextFieldComponent from '../../atoms/textfield/index';
import Model from '../Model';
import MailPreview from '../../molecules/MailPreview';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Box = styled(MuiBox)({
  paddingTop: 15,
  paddingBottom: 15,
  paddingLeft: 20,
  paddingRight: 20,
  gap: 10,
  backgroundColor: '#FFFFFF',
  width: '90%',
});

const AdverseBox = styled(MuiBox)({
  display: 'flex',
});

const Footer = styled(MuiBox)({
  display: 'flex',
  justifyContent: 'space-between',
});

const MuiTextField = styled(TextField)({
  '& fieldset': {
    border: 'none',
  },
});

export interface MailInterface {
  mailFooter: boolean;
}

const Mail: React.FC<MailInterface> = (props: MailInterface) => {
  const charges: string[] = [];
  const { id } = useParams();
  const navigate = useNavigate();

  function setCharges(e: any, charge: string) {
    if (e.target.checked) {
      charges.push(charge);
    } else {
      const index = charges.indexOf(charge);
      if (index > -1) {
        // only splice array when item is found
        charges.splice(index, 1); // 2nd parameter means remove one item only
      }
    }
    console.log('charges ', charges);
  }

  function preAdverse() {
    axios
      .patch('http://localhost:3001/candidates/pre-adverse/' + id)
      .then((res) => {
        navigate('/candidate');
      });
  }

  return (
    <Box>
      <MailSubjectComponent
        keys="From"
        value="kyle@checkr.com"
        showBorderBottom={true}
      />
      <MailSubjectComponent
        keys="To"
        value="john.smith@checkr.com"
        showBorderBottom={true}
      />
      <MailSubjectComponent
        keys="Subject"
        value=" Pre-adverse action notice - checkr-bpo"
        showBorderBottom={true}
      />
      <MuiTextField
        fullWidth
        rows={3}
        id="outlined-textarea"
        label=""
        multiline
        value="Dear John Smith,
         You recently authorized checkr-bpo (“the company”) to obtain consumer reports and/or invistigate consumer reportsabout you from a consumer reporting agency. The Company is considering taking action in whole or in past on information in such report(s) including the following specific items identified in the report prepared by Checkr, Inc."
      />
      <FormGroup>
        <Checkbox
          label="Driving while license suspended"
          disabled={false}
          defaultChecked={false}
          onChange={(e: any) =>
            setCharges(e, 'Driving while license suspended')
          }
          data-testid="charges"
        />
        <Checkbox
          label="Assault Domestic Violence"
          disabled={false}
          defaultChecked={false}
          onChange={(e: any) =>
            setCharges(e, 'Assault Domestic Violence')
          }
        />
        <Checkbox
          label="Unable to verify employment history at Dunder Mifflin"
          disabled={false}
          defaultChecked={false}
          onChange={(e: any) =>
            setCharges(
              e,
              'Unable to verify employment history at Dunder Mifflin'
            )
          }
        />
      </FormGroup>
      <div>
        <MuiTextField
          fullWidth
          rows={2}
          id="outlined-textarea1"
          label=""
          multiline
          value="If you wish to dispute the accuracy of the information in the report directly with the consumer reporting agency (i.e., the source of the informationcontained in the report), you should contact the agency identifield above directly.Sincerely,Checkr-bpo"
        />
        <hr />
        {props.mailFooter ? (
          <Footer>
            <AdverseBox>
              <LabelComponent
                fontWeight="normal"
                text="Auto send post adverse action"
                textColor="black"
                variant="subtitle2"
              />
              <TextFieldComponent />
              <LabelComponent
                fontWeight="normal"
                text="Days"
                textColor="black"
                variant="subtitle2"
              />
            </AdverseBox>
            <Model
              children={
                <MailPreview name={'sulay'} charges={charges} />
              }
              title={'Pre-Adverse Action Notice'}
              modelHeader={true}
              modelFooter={true}
              open={false}
              onSubmit={preAdverse}
            />
          </Footer>
        ) : (
          ''
        )}
      </div>
    </Box>
  );
};

export default Mail;
