import React from 'react';
import { hot } from 'react-hot-loader';
import { Base64 } from 'js-base64';
import { isDev } from '../../utils/env.utils';
import invariant from '../../utils/error-utils';
import { setTitle } from '../../utils/wechat-utils';
import * as deviceUtils from '../../utils/device-utils';
import { horizontalTips, verticalTips } from '../../utils/flip-tips';
import { throttle } from '../../utils/designing-mode-utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pop: 0
    };
  }
  componentDidMount() {
    window.onscroll = () => {
      throttle(this.scroll);
    };
  }
  scroll() {
    console.log(1);
  }
  throttle() {
    var isClear = arguments[0],
      fn;
    if (typeof isClear === 'boolean') {
      fn = arguments[1];
      var clear = fn.throttleId && clearTimeout(fn.throttleId);
    } else {
      fn = isClear;
      var param = arguments[1];
      var p = {
        ...{
          context: null,
          args: [],
          time: 300
        },
        ...param
      };
      this.throttle(true, fn);
      fn.throttleId = setTimeout(function() {
        fn.call(p.context, p.args);
      }, p.time);
    }
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <button>saca</button>
      </div>
    );
  }
}
export default hot(module)(App);
