import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';

import './styles/global';

import Home from './pages/Home';

const App = () => (
  <Fragment>
    <Home />
    <ToastContainer />
  </Fragment>
);

export default App;
