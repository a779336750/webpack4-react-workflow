import React, { PureComponent } from 'react';
import styles from './index.less';
const ModalDialogHoc = Component =>
  class ModalDialog extends PureComponent {
    constructor() {
      super();
      this.state = {
        data: {
          title: '',
          closeOnClick: false,
          content: ''
        },
        visible: false
      };
      this.close = this.close.bind(this);
    }
    componentDidMount() {
      document.addEventListener('modal', this.modalHandler);
    }
    componentWillUnmount() {
      document.removeEventListener('modal', this.modalHandler);
    }
    modalHandler = e => {
      this.setState({
        data: e.detail.data,
        visible: true
      });
    };
    close() {
      this.setState({
        visible: false,
        data: {
          title: '',
          closeOnClick: false,
          content: ''
        }
      });
    }
    static show(data) {
      document.dispatchEvent(
        new CustomEvent('modal', {
          detail: {
            data
          }
        })
      );
    }
    render() {
      return !this.state.visible ? null : (
        <div className={styles.modal}>
          <div className={styles.dialog}>
            <div className={styles.dialogTitle}>
              <span className={styles.dialogClose} onClick={this.close}>
                +
              </span>
            </div>
            <Component {...this.props} />
          </div>
        </div>
      );
    }
  };
/**
 * 使用方法：
 *
 * 引入：import ModalHoc from '@src/components/modal-dialog-hoc';
 * 使用es7 decorator对业务组件进行封装
 * @ModalHoc
 * class HelloWorld extends React.Component {
 *  render() {
 *    return <div>hello world</div>;
 *  }
 * }
 * 弹出弹窗
 * HelloWorld.show()
 */
export default ModalDialogHoc;
