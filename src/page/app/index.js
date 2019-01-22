import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Router, Switch, HashRouter } from 'react-router-dom';
import Main from '../main';
import AntdTest from '../antd-test';
import CssTest from '../30s-css-test';
import { withRouter } from 'react-router';
const ROUTE_NAME = {
  MODAL: '/modal',
  ANTD_TEST: '/antd-test',
  CSS_TEST: '/css-test',
  MAIN: '/'
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pop: 0
    };
  }
  render() {
    return (
      <div>
        <HashRouter>
          <Route exact path={ROUTE_NAME.MAIN} component={Main} />
        </HashRouter>
        <HashRouter>
          <Route exact path={ROUTE_NAME.ANTD_TEST} component={AntdTest} />
        </HashRouter>
        <HashRouter>
          <Route exact path={ROUTE_NAME.CSS_TEST} component={CssTest} />
        </HashRouter>
      </div>
    );
  }
}
export default withRouter(hot(module)(App));
