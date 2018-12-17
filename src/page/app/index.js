import React from 'react';
import Main from '../main';
import { hot } from 'react-hot-loader';
import { isTypeOf } from '../../utils/utils/type-utils';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pop: 0
    };
  }
  componentDidMount() {
    console.log(isTypeOf({ a: 1 }, 'Array'));
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
