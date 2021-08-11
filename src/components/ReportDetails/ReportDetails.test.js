import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReportDetails from './ReportDetails';

describe('<ReportDetails />', () => {
  test('it should mount', () => {
    render(<ReportDetails />);
    
    const reportDetails = screen.getByTestId('ReportDetails');

    expect(reportDetails).toBeInTheDocument();
  });
});