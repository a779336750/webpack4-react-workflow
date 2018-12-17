import * as React from 'react';
import Button from '@src/components/button';
import { render as renderDOM } from 'react-dom';
import styles from './index.less';
import Modal from './modal';
import Services from '@src/services';
import Confirm from './Confirm';
import Toast from '@src/components/toast';

export default class LoginRegisterWrapper extends React.Component {
  static defaultProps = {
    loginButton: <Button type="primary">登录</Button>,
    exitButton: <Button type="primary">退出</Button>,
    account: '',
    authenticated: false,
    modal: '',
    updateLoginStatus: options => {
      this.setState(prevState => ({
        ...prevState,
        ...options
      }));
    },
    loginSuccess: account => console.log(account + '登录成功'),
    logoutSuccess: f => console.log('已退出')
  };

  componentDidUpdate() {
    this.removeModalNode();

    if (!this.props.modal) {
      return;
    }

    this.modalWrapperNode = document.createElement('div');

    this.modalWrapperNode.className = styles.modalWrapperNode;

    document.body.appendChild(this.modalWrapperNode);

    const otherProps = {
      onSuccess: this.onSuccess,
      onRegisterLinkClick: () => this.popModal('register'),
      onLoginLinkClick: () => this.popModal('login')
    };

    renderDOM(
      <Modal
        loginStatus={this.props}
        {...otherProps}
        closeModal={() => this.popModal('')}
      />,
      this.modalWrapperNode
    );
  }

  async componentDidMount() {
    try {
      const { account } = await Services.getInfo();
      this.loginSuccess(account);
    } catch (response) {
      console.log(response.message);
    }
  }

  loginSuccess = account => {
    const { updateLoginStatus, loginSuccess } = this.props;
    updateLoginStatus({
      account,
      authenticated: true,
      modal: ''
    });
    loginSuccess(account);
  };

  logoutSuccess = () =>
    this.props.updateLoginStatus({
      account: '',
      authenticated: false,
      modal: ''
    });

  popModal = modal =>
    this.props.updateLoginStatus({
      modal
    });

  onSuccess = (account, action) => {
    this.loginSuccess(account);
    Toast.success(`${account}${action}成功`);
    this.popModal('');
  };

  exit = async () => {
    try {
      await Services.logout();
      Toast.success('退出成功');
      this.logoutSuccess();
    } catch ({ message }) {
      Toast.fail(message);
    }
  };

  removeModalNode = () => {
    if (this.modalWrapperNode) {
      console.log('n', this.modalWrapperNode);
      document.body.removeChild(this.modalWrapperNode);
      this.modalWrapperNode = null;
    }
  };

  render() {
    const { authenticated, account } = this.props;

    const { loginButton, exitButton } = this.props;
    return (
      <div>
        {authenticated ? (
          <Confirm onClick={this.exit} account={account}>
            {exitButton}
          </Confirm>
        ) : (
          <span onClick={() => this.popModal('login')}>{loginButton}</span>
        )}
      </div>
    );
  }
}
