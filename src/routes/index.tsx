import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import App from '../App';

import HomeRoute from './home';

const BasicRoutes = () => (
  <BrowserRouter>
    <Route exact path="/" component={App}>

    </Route>

    <HomeRoute/>

  </BrowserRouter>
);

export default BasicRoutes;