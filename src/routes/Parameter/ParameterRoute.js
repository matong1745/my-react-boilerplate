import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import ParameterList from './routes/ParameterList/ParameterList';
import Parameter from './routes/Parameter/Parameter';

const ParameterRoute = () => {
  return (
    <Fragment>
      <Route exact path="/parameter" component={ParameterList} />
      <Route exact path="/parameter/:id" component={Parameter} />
    </Fragment>
  );
};

export default ParameterRoute;
