import React from 'react';
import Main from '../main';
import { hot } from 'react-hot-loader';
import { Base64 } from 'js-base64';
import * as deviceUtils from '../../utils/device-utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pop: 0
    };
  }
  componentDidMount() {
    console.log(deviceUtils.isAndroid());
    console.log(deviceUtils.isIOS());
    console.log(deviceUtils.isMobile());
    console.log(deviceUtils.isWeiXin());
    console.log(deviceUtils.isIE());
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
        <Main pop={this.state.pop} />
      </div>
    );
  }
}
export default hot(module)(App);
