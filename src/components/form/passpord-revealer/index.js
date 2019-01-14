import * as React from 'react';
export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReveal: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      isReveal: !this.state.isReveal
    });
  }
  render() {
    const { callback } = this.props;
    const { isReveal } = this.state;
    return (
      <div>
        <input
          type={isReveal ? 'text' : 'password'}
          onChange={e => {
            callback(e.target.value);
          }}
        />
        <button onClick={this.handleClick}>show password</button>
      </div>
    );
  }
}
Input.defaultProps = {
  /**
   * callback函数用于获取input的值，每次输入都会执行callback以获取value值
   * @param v
   */
  callback: v => {
    console.log(v);
  }
};
