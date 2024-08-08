import PreAdverseAction from './preAdverseAction';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

test('testing the CandidateInfo component functionality', async () => {
  const mockedUsedNavigate = jest.fn();

  jest.mock('react-router-dom', () => ({
    useNavigate: () => mockedUsedNavigate,
  }));

  render(
    <BrowserRouter>
      <PreAdverseAction />
    </BrowserRouter>
  );

  const testCandidateTitle = await screen.findByText(
    /Pre-Adverse Action Notice/,
    {
      selector: 'h6',
    }
  );
  expect(testCandidateTitle).toBeInTheDocument();

  const testPreviewButton = await screen.findByText(
    /Preview Notice/,
    {
      selector: 'button',
    }
  );

  expect(testPreviewButton).toBeInTheDocument();
});
