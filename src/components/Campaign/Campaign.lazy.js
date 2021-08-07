import React, { lazy, Suspense } from 'react';

const LazyCampaign = lazy(() => import('./Campaign'));

const Campaign = props => (
  <Suspense fallback={null}>
    <LazyCampaign {...props} />
  </Suspense>
);

export default Campaign;
