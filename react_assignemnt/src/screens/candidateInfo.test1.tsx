import CamdidateInfo from './CandidateInfo';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

test('testing the CandidateInfo component functionality', async () => {
  const mockedUsedNavigate = jest.fn();

  jest.mock('react-router-dom', () => ({
    useNavigate: () => mockedUsedNavigate,
  }));

  axios.get = jest.fn();
  (axios.get as jest.Mock).mockResolvedValueOnce(
    Promise.resolve({
      data: {
        candidate: {
          adjudication: 'ENGAGE',
          candidateID: 1,
          created_at: '2023-03-23T08:55:56.000Z',
          dob: '1995-02-01T00:00:00.000Z',
          email: 'sulay@gmail.com',
          license_no: '123',
          location: 'USA',
          name: 'Sulay Panchal',
          package: 'asd',
          phone: 1234567890,
          social_security: '123',
          status: 'CLEAR',
          zipcode: 234,
        },
        ChargesList: [
          {
            courtSearchesStatusID: 1,
            candidateID: 1,
            searchesID: 1,
            status: 'CLEAR',
            createdAt: '2023-03-23T09:00:48.000Z',
            court_searches: [
              {
                searchesID: 1,
                name: 'SSN Verification',
              },
            ],
          },
        ],
      },
    })
  );

  render(
    <BrowserRouter>
      <CamdidateInfo />
    </BrowserRouter>
  );

  const testCandidateName = await screen.findByText(
    /Sulay Panchal/i,
    {
      selector: 'h5',
    }
  );
  expect(testCandidateName).toBeInTheDocument();

  const engageButton = await screen.findByText(/ENGAGE/i, {
    selector: 'button',
  });
  userEvent.click(engageButton);
});
