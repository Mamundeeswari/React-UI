import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Campaign from './Campaign';

describe('<Campaign />', () => {
  test('it should mount', () => {
    render(<Campaign />);
    
    const campaign = screen.getByTestId('Campaign');

    expect(campaign).toBeInTheDocument();
  });
});