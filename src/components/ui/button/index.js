import * as React from 'react';
import style from './index.less';
import { Button as AntdMobile } from 'antd-mobile';
import cx from 'classnames';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      loading: false
    };
  }

  async onClick() {
    const { onClick } = this.props;
    if (onClick) {
      this.setState({ loading: true });
      try {
        await onClick();
        this.setState({ loading: false });
      } catch (e) {
        this.setState({ loading: false });
        throw e;
      }
    }
  }

  getClassName() {
    const { size, className } = this.props;
    return cx(
      'button',
      {
        medium: style.buttonMedium
      }[size],
      className
    );
  }

  render() {
    let { children, loading, disabled, ...restProps } = this.props;
    loading = loading === undefined ? this.state.loading : loading;
    disabled = disabled === undefined ? this.state.loading : disabled;
    return (
      <AntdMobile
        {...restProps}
        loading={loading}
        disabled={loading || disabled}
        onClick={this.onClick}
        className={this.getClassName()}
      >
        {children}
      </AntdMobile>
    );
  }
}
