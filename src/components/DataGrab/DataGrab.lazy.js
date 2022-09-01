import React, { lazy, Suspense } from 'react';

const LazyDataGrab = lazy(() => import('./DataGrab'));

const DataGrab = props => (
  <Suspense fallback={null}>
    <LazyDataGrab {...props} />
  </Suspense>
);

export default DataGrab;
