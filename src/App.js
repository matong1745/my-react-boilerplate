import React, { Fragment, Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './routes/Home/Home';
import ParameterRoute from './routes/Parameter/ParameterRoute';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <ParameterRoute />
      </Fragment>
    );
  }
}

export default withRouter(App);
