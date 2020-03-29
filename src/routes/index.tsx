import React, {Suspense} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import App from '../App';

import HomeRoute from './home';
import HooksRoute from './hooks';

const BasicRoutes = () => (
  <BrowserRouter>

    <Route exact path="/" component={App}/>

    <Suspense fallback={<div>loading...</div>}>

      <HomeRoute/>

      <HooksRoute/>

    </Suspense>

  </BrowserRouter>
);

export default BasicRoutes;