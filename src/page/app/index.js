import React from 'react';
import { hot } from 'react-hot-loader';
import { Base64 } from 'js-base64';
import { isDev } from '../../utils/env.utils';
import invariant from '../../utils/error-utils';
import * as deviceUtils from '../../utils/device-utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pop: 0
    };
  }
  componentDidMount() {
    invariant([], '不能为空字符串');
  }
  onClick() {
    this.setState({
      pop: this.state.pop + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.onClick.bind(this)}>change</button>
      </div>
    );
  }
}
export default hot(module)(App);
