import React from 'react';
import Main from '../main';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pop: 0
    };
  }
  onClick() {
    console.log(this);
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
