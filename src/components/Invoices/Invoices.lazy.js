import React, { lazy, Suspense } from 'react';

const LazyInvoices = lazy(() => import('./Invoices'));

const Invoices = props => (
  <Suspense fallback={null}>
    <LazyInvoices {...props} />
  </Suspense>
);

export default Invoices;
