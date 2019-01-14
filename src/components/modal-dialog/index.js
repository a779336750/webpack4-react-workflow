import React, { PureComponent } from 'react';
import styles from './index.less';
export default class ModalDialog extends React.Component {
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
            {this.state.data.title}
            <span className={styles.dialogClose} onClick={this.close}>
              +
            </span>
          </div>
          <div className={styles.dialogContent}>{this.state.data.content}</div>
        </div>
      </div>
    );
  }
}
