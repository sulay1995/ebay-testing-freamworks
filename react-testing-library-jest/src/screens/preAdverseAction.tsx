import React from 'react';
import { Box } from '@mui/system';
import Header from '../components/molecules/Header';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Label from '../components/atoms/label/index';
import Mail from '../components/organisms/Mail/index';

const PreAdverseAction: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <Header>
          <>
            <div style={{ display: 'flex' }}>
              <ArrowBackIcon
                onClick={() => {
                  navigate(-1);
                }}
                data-testid="primary"
              />
              <Label
                padding="0px 10px"
                text="Pre-Adverse Action Notice"
              />
            </div>
          </>
        </Header>
      </Box>
      <Mail mailFooter />
    </>
  );
};

export default PreAdverseAction;
