import PreAdverseList from './preAdverseList';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

test('testing the CandidateInfo component functionality', async () => {
  const mockedUsedNavigate = jest.fn();

  jest.mock('react-router-dom', () => ({
    useNavigate: () => mockedUsedNavigate,
  }));

  axios.get = jest.fn();
  (axios.get as jest.Mock).mockResolvedValueOnce(
    Promise.resolve({
      data: [
        {
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
      ],
    })
  );

  render(
    <BrowserRouter>
      <PreAdverseList />
    </BrowserRouter>
  );

  const testCandidateTitle = await screen.findByText(/Candidate/i, {
    selector: 'h5',
  });
  expect(testCandidateTitle).toBeInTheDocument();

  const testEngageStatus = await screen.findByText(/ENGAGE/i, {
    selector: 'h6',
  });

  expect(testEngageStatus).toBeInTheDocument();
});
