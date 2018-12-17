import * as React from 'react';
import styles from './index.less';
import LoginForm from '../login';
import RegisterForm from '../register';
import FormLayout from '../form-layout';

export default class LoginRegisterWrapper extends React.Component {
  static defaultProps = {
    loginStatus: {
      authenticated: false,
      modal: ''
    },
    onSuccess: account => {
      console.log('login: ' + account);
    },
    onRegisterLinkClick: () => {
      console.log('pop register modal');
    },
    onLoginLinkClick: () => {
      console.log('pop login modal');
    }
  };
  renderLoginModal(modal) {
    const {
      onSuccess,
      onRegisterLinkClick,
      onLoginLinkClick,
      closeModal
    } = this.props;

    if (modal === 'login') {
      return (
        <FormLayout title="登录" closeModal={closeModal}>
          <LoginForm
            onSuccess={account => onSuccess(account, '登录')}
            onRegisterLinkClick={onRegisterLinkClick}
          />
        </FormLayout>
      );
    }
    if (modal === 'register') {
      return (
        <FormLayout title="手机注册" closeModal={closeModal}>
          <RegisterForm
            onSuccess={account => onSuccess(account, '注册')}
            onLoginLinkClick={onLoginLinkClick}
          />
        </FormLayout>
      );
    }

    return null;
  }

  render() {
    const {
      loginStatus: { modal }
    } = this.props;

    return (
      <div className={styles.root}>
        <div
          ref={$dom => {
            this.$main = $dom;
            window.$main = $dom;
          }}
          className={styles.main}
        >
          {this.renderLoginModal(modal)}
        </div>
      </div>
    );
  }
}
