import * as React from 'react';
export default class Input extends React.Component {
  render() {
    const { values, callback, disabled, selected } = this.props;
    return (
      <select
        disabled={disabled}
        onChange={({ target: { value } }) => callback(value)}
        defaultValue={selected}
      >
        {values.map(([value, text], index) => (
          <option key={index} value={value}>
            {text}
          </option>
        ))}
      </select>
    );
  }
}
Input.defaultProps = {
  /**
   * callback函数用于获取input的值，每次输入都会执行callback以获取value值
   * @param v
   */
  callback: v => console.log(v),
  /**
   * 可选项，数据结构为：
   * [[optionName1:value1],[optionName2:value2]]
   */
  values: [[1, 1], [2, 2]],
  /**
   * 是否不可选
   */
  disabled: false,
  /**
   * 初始值
   */
  selected: 1
};
