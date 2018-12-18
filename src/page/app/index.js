import React from 'react';
import Main from '../main';
import { hot } from 'react-hot-loader';
import { isTypeOf } from '../../utils/type-utils';
import {
  objectToJson,
  base64UrlEncode,
  base64UrlDecode,
  getUrlParams
} from '../../utils/data-utils';
import { Base64 } from 'js-base64';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pop: 0
    };
  }
  componentDidMount() {
    console.log(base64UrlEncode(location.href));
    console.log(base64UrlDecode(base64UrlEncode(location.href)));
    console.log(getUrlParams());
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
