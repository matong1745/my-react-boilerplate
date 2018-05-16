import React, { Fragment } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './routes/Home/Home';
import ParameterRoute from './routes/Parameter/ParameterRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <ParameterRoute />
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
