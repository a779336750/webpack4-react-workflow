import React, { PureComponent } from 'react';
import style from './index.less';
export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    const { isToggleOn } = this.state;
    return (
      <button
        onClick={this.handleClick}
        className={isToggleOn ? style.on : style.off}
      >
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
