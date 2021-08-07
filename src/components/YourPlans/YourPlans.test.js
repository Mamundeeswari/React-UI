import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import YourPlans from './YourPlans';

describe('<YourPlans />', () => {
  test('it should mount', () => {
    render(<YourPlans />);
    
    const yourPlans = screen.getByTestId('YourPlans');

    expect(yourPlans).toBeInTheDocument();
  });
});