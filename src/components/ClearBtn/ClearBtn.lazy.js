import React, { lazy, Suspense } from 'react';

const LazyClearBtn = lazy(() => import('./ClearBtn'));

const ClearBtn = props => (
  <Suspense fallback={null}>
    <LazyClearBtn {...props} />
  </Suspense>
);

export default ClearBtn;
