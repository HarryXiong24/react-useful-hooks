import React from 'react';
import { RouteObject } from 'react-router';
import Home from '@/pages/Home/index';
import NoMatch from '@/pages/404/index';
// import Demo from '@/pages/Demo/index';

const Demo = React.lazy(() => import('@/pages/Demo/index'));

const routes: RouteObject[] = [
  { path: '/', element: <Home />, index: true },
  { path: '/demo', element: <Demo /> },
  { path: '*', element: <NoMatch /> },
];

export default routes;
