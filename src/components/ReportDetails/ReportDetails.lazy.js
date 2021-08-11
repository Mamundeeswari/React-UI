import React, { lazy, Suspense } from 'react';

const LazyReportDetails = lazy(() => import('./ReportDetails'));

const ReportDetails = props => (
  <Suspense fallback={null}>
    <LazyReportDetails {...props} />
  </Suspense>
);

export default ReportDetails;
