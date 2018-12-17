import * as React from 'react';
import style from './index.less';
import { createForm } from 'rc-form';
import Input from '@src/components/input';
import Button from '@src/components/button';
import captchaHandlerDecorate from '@src/utils/captcha-deco-util';
import Toast from '@src/components/toast';
import Link from '@src/components/link';
import Services from '@src/services';
import cx from 'classnames';

@createForm()
export default class LoginForm extends React.Component {
  static defaultProps = {
    onSuccess: f => f,
    onRegisterLinkClick: () => console.log('go to register modal')
  };

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      errors: {}
    };
  }

  submit() {
    return new Promise((resolve, reject) => {
      this.props.form.validateFields((error, value) => {
        if (!error) {
          this.login(value).then(resolve, reject);
        } else {
          resolve();
        }
      });
    });
  }

  async login({ account, password }) {
    try {
      const response = await this.loginAsync({ account, password });
      // if response is valid
      if (typeof response.account === 'string') {
        this.loginSuccess(response.account);
      }
    } catch ({ message }) {
      Toast.fail(message);
    }
  }

  loginSuccess(account) {
    const { onSuccess } = this.props;
    onSuccess(account);
  }

  static loginFailed(error) {
    const { message } = error;
    message && Toast.info(message);
    return Promise.reject(error);
  }

  /**
   * 登录请求
   */
  @captchaHandlerDecorate()
  async loginAsync({ account, password, ...authParams }) {
    console.log({ authParams });
    return await Services.login({ account, password, ...authParams });
  }

  static getErrorKeyValue(name, message) {
    if (message && typeof message === 'object') {
      // noinspection UnnecessaryLocalVariableJS
      const error = message;
      const err = error[name].errors[0];
      message = err.message;
    }
    return {
      [name]: message
    };
  }

  updateErrorState(name, message) {
    this.setState({
      errors: {
        ...Object.assign(
          this.state.errors,
          LoginForm.getErrorKeyValue(name, message)
        )
      }
    });
  }

  renderAccountInput() {
    const { account: errorMessage } = this.state.errors;
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <Input
          {...getFieldProps('account', {
            rules: [
              {
                validator: (rule, value, callback) => {
                  let errorMessage = null;
                  if (!value) {
                    errorMessage = '请输入通行证账号';
                  }
                  if (errorMessage) {
                    callback(errorMessage);
                    this.updateErrorState('account', errorMessage);
                  } else {
                    callback();
                    this.updateErrorState('account', null);
                  }
                }
              }
            ]
          })}
          clear
          errorMessage={errorMessage}
          placeholder="通行证账号"
          className="loginInput"
          labelNumber={3}
        >
          通行证:
        </Input>
        <span className="error-tip">{errorMessage}</span>
      </div>
    );
  }

  renderPasswordInput() {
    const { password: errorMessage } = this.state.errors;
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <Input
          {...getFieldProps('password', {
            rules: [
              {
                validator: (rule, value, callback) => {
                  let errorMessage = null;
                  if (!value) {
                    errorMessage = '请输入密码';
                  }
                  if (errorMessage) {
                    callback(errorMessage);
                    this.updateErrorState('password', errorMessage);
                  } else {
                    callback();
                    this.updateErrorState('password', null);
                  }
                }
              }
            ]
          })}
          type="password"
          clear
          errorMessage={errorMessage}
          placeholder="密码"
          className="loginInput"
          labelNumber={3}
        >
          密码:
        </Input>
        <span className="error-tip">{errorMessage}</span>
      </div>
    );
  }

  render() {
    const { onRegisterLinkClick = f => f } = this.props;
    return (
      <div className={style.loginForm}>
        <div className={cx(style.item, 'field-item')}>
          {this.renderAccountInput()}
        </div>
        <div className={cx(style.item, 'field-item')}>
          {this.renderPasswordInput()}
        </div>
        <div className={style.operation}>
          <Button type="button" onClick={this.submit}>
            登录
          </Button>
        </div>
        <div className={style.extraNav}>
          <Link
            className={cx(style.extraNavLink, 'extra-nav-link')}
            href="https://m.xoyo.com/#/forget-password"
          >
            忘记密码
          </Link>
          <Link
            className={cx(style.extraNavLink, 'extra-nav-link')}
            onClick={onRegisterLinkClick}
          >
            马上注册
          </Link>
        </div>
      </div>
    );
  }
}
