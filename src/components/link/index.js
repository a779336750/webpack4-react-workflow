import React, { PureComponent } from 'react';
import style from './index.less';
import cx from 'classnames';

export default class Link extends PureComponent {
  render() {
    let { children, className, ...restProps } = this.props;
    className = cx(style.link, className);
    return (
      <a className={className} {...restProps}>
        {children}
      </a>
    );
  }
}
