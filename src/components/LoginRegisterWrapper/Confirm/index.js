import React, { Component } from 'react';
import { Modal } from 'antd-mobile';

export default class Confirm extends Component {
  showAlert = () => {
    const { onClick, account } = this.props;
    const alertInstance = Modal.alert(
      '退出登录',
      `确认退出账号：${account} ?`,
      [
        {
          text: '取消',
          onPress: () => console.log('cancel'),
          style: 'default'
        },
        {
          text: <span className="confirm-exit">退出</span>,
          onPress: onClick
        }
      ]
    );
    setTimeout(() => {
      // 可以调用close方法以在外部close
      alertInstance.close();
    }, 500000);
  };

  render() {
    return <span onClick={this.showAlert}>{this.props.children}</span>;
  }
}
