import React, { lazy, Suspense } from 'react';

const LazyCampaignName = lazy(() => import('./CampaignName'));

const CampaignName = props => (
  <Suspense fallback={null}>
    <LazyCampaignName {...props} />
  </Suspense>
);

export default CampaignName;
