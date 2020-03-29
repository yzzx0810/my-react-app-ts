import React, {lazy} from 'react';
import {Route} from 'react-router-dom';

const Home = lazy(() => import('@/modules/home'));


const homeRoutes = () => (
  <Route path='/home' component={Home}>

  </Route>
);
export default homeRoutes;