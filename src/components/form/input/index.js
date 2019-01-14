import * as React from 'react';
export default class Input extends React.Component {
  render() {
    const { callback } = this.props;
    return (
      <input
        type="text"
        onChange={e => {
          callback(e.target.value);
        }}
      />
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
