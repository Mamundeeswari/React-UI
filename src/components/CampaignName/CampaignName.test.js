import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CampaignName from './CampaignName';

describe('<CampaignName />', () => {
  test('it should mount', () => {
    render(<CampaignName />);
    
    const campaignName = screen.getByTestId('CampaignName');

    expect(campaignName).toBeInTheDocument();
  });
});