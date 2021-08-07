import React, { lazy, Suspense } from 'react';

const LazyYourPlans = lazy(() => import('./YourPlans'));

const YourPlans = props => (
  <Suspense fallback={null}>
    <LazyYourPlans {...props} />
  </Suspense>
);

export default YourPlans;
