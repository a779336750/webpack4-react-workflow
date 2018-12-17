import React, { Component } from 'react';
import style from './index.less';
import cx from 'classnames';
import closeImg from '../images/close.png';

export default class FormLayout extends Component {
  render() {
    const { title, children, closeModal } = this.props;
    return (
      <div className={style.formLayout}>
        <header className={style.header}>
          <div className={cx(style.title, 'form-title')}>{title}</div>
          <div className={style.close} onClick={closeModal}>
            <img src={closeImg} alt="关闭" />
          </div>
        </header>
        <div className={style.main}>{children}</div>
      </div>
    );
  }
}
