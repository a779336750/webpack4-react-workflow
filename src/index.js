import React from 'react';
import ReactDOM from 'react-dom';
import App from './page/app';
import { HashRouter as Router } from 'react-router-dom';
const AppContainer = function() {
  return (
    <Router>
      <App />
    </Router>
  );
};
ReactDOM.render(<AppContainer />, document.getElementById('app'));
