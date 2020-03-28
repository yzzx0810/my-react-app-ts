import React from 'react';
import {Route} from 'react-router-dom';

import Home from '@/modules/home';

const homeRoutes = () => (
  <Route path='/home' component={Home}>

  </Route>
);
export default homeRoutes;