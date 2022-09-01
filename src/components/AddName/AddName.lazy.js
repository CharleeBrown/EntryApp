import React, { lazy, Suspense } from 'react';

const LazyAddName = lazy(() => import('./AddName'));

const AddName = props => (
  <Suspense fallback={null}>
    <LazyAddName {...props} />
  </Suspense>
);

export default AddName;
