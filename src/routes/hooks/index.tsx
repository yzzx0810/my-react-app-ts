import React, {lazy} from 'react';
import {Route} from 'react-router-dom';

const Hooks = lazy(() => import('@/modules/hooks'));


const hooksRoutes = () => (
  <>
    <Route path='/hooks' component={Hooks}/>
  </>
);
export default hooksRoutes;