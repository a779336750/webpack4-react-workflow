import * as React from 'react';
import ReactDOM from 'react-dom';
import { Modal as AntdModal } from 'antd-mobile';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import cx from 'classnames';

import styles from './style/index.m.less';

export default class Modal extends React.Component {
  static defaultProps = {
    prefixCls: 'xc-modal'
  };

  static disableContextMenu($dom, childrenClassName) {
    if ($dom && $dom.getElementsByClassName) {
      Array.prototype.forEach.call(
        $dom.getElementsByClassName(childrenClassName),
        $button => {
          $button.oncontextmenu = event => {
            event.preventDefault();
            event.stopPropagation();
            return false;
          };
        }
      );
    }
  }

  /**
   * 确认按钮的 Footer 常量
   * @type {*[]}
   */
  static CONFIRM_FOOTER = [
    {
      text: '确定',
      onPress: props => {
        props.onClose();
      }
    }
  ];

  static renderHeader({ title, prefixCls }) {
    return <header className={`${prefixCls}-title`}>{title}</header>;
  }

  /**
   * 优化:
   * 由于按钮使用 a 标签, 在移动端长按会弹出右键菜单
   * 所以决定禁用右键菜单
   */
  preventLongClick() {
    const $target = ReactDOM.findDOMNode(this.$dom);
    Modal.disableContextMenu($target, 'am-modal-button');
  }

  enableAutoCloseTimeout(func, duration) {
    this.clearAutoCloseTimeout();
    this.autoCloseTimeoutHook = setTimeout(func, duration);
  }

  clearAutoCloseTimeout() {
    clearTimeout(this.autoCloseTimeoutHook);
  }

  /**
   * 是否应该自动关闭
   */
  shouldAutoClose() {
    const { duration, onClose } = this.props;
    if (duration && onClose) {
      this.enableAutoCloseTimeout(onClose, duration);
    }
  }

  componentDidMount() {
    /**
     * 禁止长按
     */
    this.preventLongClick();
    /**
     * 判断是否自动关闭
     */
    this.shouldAutoClose();
  }

  componentWillUnmount() {
    /**
     * 清除 timeout 钩子
     */
    this.clearAutoCloseTimeout();
  }

  renderDescription({ description, prefixCls }) {
    if (Array.isArray(description)) {
      return description.map((item, key) => {
        if (typeof item === 'object') {
          switch (item.type) {
            case 'img':
              return (
                <img
                  key={key}
                  className={`${prefixCls}-des-img`}
                  src={item.src}
                  alt={item.alt}
                />
              );
            default:
              throw new Error(`unknown description item type = ${item.type}`);
          }
        }
        return item;
      });
    }
    return description;
  }

  // noinspection JSMethodCanBeStatic
  renderExtra({ extra, prefixCls }) {
    if (extra) {
      return <div className={`${prefixCls}-extra`}>{extra}</div>;
    }
    return null;
  }

  renderChildren({ children, title, prefixCls, extra, description }) {
    if (children) {
      return children;
    }
    return (
      <React.Fragment>
        {Modal.renderHeader({ title, prefixCls })}
        {description && (
          <div className={`${prefixCls}-des`}>
            {this.renderDescription({ description, prefixCls })}
          </div>
        )}
        {this.renderExtra({ extra, prefixCls })}
      </React.Fragment>
    );
  }

  render() {
    const {
      prefixCls,
      visible,
      footer,
      title,
      description,
      extra,
      children,
      frameless,
      ...props
    } = this.props;
    return (
      <AntdModal
        ref={$ref => (this.$dom = $ref)}
        className={styles.root}
        transparent
        maskClosable={true}
        {...props}
        wrapClassName={cx(prefixCls, frameless && `${prefixCls}-frameless`)}
        visible={visible}
        footer={footer}
      >
        {this.renderChildren({
          prefixCls,
          title,
          description,
          extra,
          children
        })}
      </AntdModal>
    );
  }
}

Modal.propTypes = {
  /**
   * 是否可见
   */
  visible: bool,
  /**
   * 对话框底部, 主要用于关于按钮点击
   */
  footer: arrayOf(
    shape({
      /**
       * 按钮文案
       */
      text: string,
      /**
       * 点击事件, (props) => void | promise
       */
      onPress: func
    })
  )
};
