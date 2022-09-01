import React, { lazy, Suspense } from 'react';

const LazyMenu = lazy(() => import('./Menu'));

const Menu = props => (
  <Suspense fallback={null}>
    <LazyMenu {...props} />
  </Suspense>
);

export default Menu;
