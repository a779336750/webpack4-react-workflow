import * as React from 'react';
import style from './index.less';
import { createForm } from 'rc-form';
import Input from '@src/components/input';
import Button from '@src/components/button';
import Link from '@src/components/link';
import SmsCodeInput from '@src/components/sms-code-input';
import Services from '@src/services';
import { removeSpaces } from '@src/utils/common-util';
import Toast from '@src/components/toast';
import cx from 'classnames';

@createForm()
export default class RegisterForm extends React.Component {
  static defaultProps = {
    onLoginLinkClick: () => console.log('go to login modal'),
    onSuccess: () => console.log('register successfully...')
  };

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.validateAndGetPhone = this.validateAndGetPhone.bind(this);
    this.state = {
      errors: {}
    };
  }

  submit() {
    const { onSuccess = f => f } = this.props;
    return new Promise((resolve, reject) => {
      this.props.form.validateFields(async (errors, value) => {
        if (!errors) {
          try {
            await Services.registerMobile({
              password: value.password,
              more: 1,
              name: value.realName,
              id_number: value.chineseId,
              mobile: removeSpaces(value.phone),
              code: removeSpaces(value.sms)
            });

            onSuccess(value.phone);
            resolve();
          } catch ({ message }) {
            Toast.fail(message);
            reject(message);
          }
        } else {
          console.error(errors);
          reject(errors);
        }
      });
    });
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
          RegisterForm.getErrorKeyValue(name, message)
        )
      }
    });
  }

  validateAndGetPhone() {
    return new Promise(resolve => {
      this.props.form.validateFields(['phone'], (error, { phone }) => {
        this.updateErrorState('phone', null);
        /**
         * 用于取消后再次亮起, 起到闪烁的作用
         */
        setTimeout(() => this.updateErrorState('phone', error), 100);
        if (error) {
          resolve(null);
        } else {
          resolve(phone);
        }
      });
    });
  }

  getFieldProps(type) {
    const { getFieldProps } = this.props.form;
    const rules = {
      phone: [
        {
          validator: (rule, value, callback) => {
            let errorMessage = null;
            if (!value) {
              errorMessage = '请输入手机号码';
            } else if (removeSpaces(value).length !== 11) {
              errorMessage = '手机号格式不正确';
            }
            this.handleValidatorError('phone', callback, errorMessage);
          }
        },
        {
          validator: (rule, value, callback) => {
            Services.exist(removeSpaces(value)).then(isExist => {
              let errorMessage = null;
              if (isExist) {
                errorMessage = '手机号码已被注册';
              }
              this.handleValidatorError('phone', callback, errorMessage);
            });
          }
        }
      ],
      sms: [
        {
          validator: (rule, value, callback) => {
            let errorMessage = null;
            if (!value) {
              errorMessage = '请输入短信验证码';
            } else if (value.length < 3) {
              errorMessage = '短信验证码格式不正确';
            }
            this.handleValidatorError('sms', callback, errorMessage);
          }
        }
      ],
      password: [
        {
          validator: (rule, value, callback) => {
            let errorMessage = null;
            if (!value) {
              errorMessage = '请输入密码';
            } else if (value.length < 8 || value.length > 32) {
              errorMessage = '密码长度要求为8-32位字符';
            }
            this.handleValidatorError('password', callback, errorMessage);
          }
        },
        {
          validator: (rule, value, callback) => {
            const form = this.props.form;
            if (value && form.isFieldTouched('confirmPassword')) {
              form.validateFields(['confirmPassword']);
            }
            callback();
          }
        }
      ],
      confirmPassword: [
        {
          validator: (rule, value, callback) => {
            const { form } = this.props;
            let errorMessage = null;
            if (!value) {
              errorMessage = '请输入确认密码';
            } else if (value !== form.getFieldValue('password')) {
              errorMessage = '两次密码不一致';
            }
            this.handleValidatorError(
              'confirmPassword',
              callback,
              errorMessage
            );
          }
        }
      ],
      realName: [
        {
          validator: (rule, value, callback) => {
            let errorMessage = null;
            if (!value) {
              errorMessage = '请输入真实姓名';
            } else if (
              !/[\u4E00-\u9FA5]/.test(value) ||
              value.length < 2 ||
              value.length > 8
            ) {
              errorMessage = '真实姓名为2-8个汉字';
            }
            this.handleValidatorError('realName', callback, errorMessage);
          }
        }
      ],
      chineseId: [
        {
          validator: (rule, value, callback) => {
            let errorMessage = null;
            if (!value) {
              errorMessage = '请输入身份证';
            } else if (!/(^\d{15}$)|(^\d{17}([0-9]|X|x)$)/.test(value)) {
              errorMessage = '请正确输入身份证号';
            }
            this.handleValidatorError('chineseId', callback, errorMessage);
          }
        }
      ]
    };

    return getFieldProps(type, {
      validateFirst: true,
      rules: rules[type]
    });
  }

  handleValidatorError(type, callback, errorMessage) {
    if (errorMessage) {
      callback(errorMessage);
      this.updateErrorState(type, errorMessage);
    } else {
      callback();
      this.updateErrorState(type, null);
    }
  }

  renderInput(type, props = {}) {
    const { [type]: errorMessage } = this.state.errors;
    return (
      <div className={cx(style.item, 'field-item')}>
        <Input
          {...this.getFieldProps(type)}
          clear
          errorMessage={errorMessage}
          className="loginInput"
          labelNumber={4}
          {...props}
        />
        <span className="error-tip">{errorMessage}</span>
      </div>
    );
  }

  renderSmsInput() {
    const { sms: errorMessage } = this.state.errors;
    return (
      <div className={cx(style.item, 'field-item')}>
        <SmsCodeInput
          {...this.getFieldProps('sms')}
          type="phone"
          clear
          errorMessage={errorMessage}
          placeholder="请输入短信验证码"
          validateAndGetPhone={this.validateAndGetPhone}
        />
        <span className="error-tip">{errorMessage}</span>
      </div>
    );
  }

  render() {
    const { onLoginLinkClick = f => f } = this.props;
    return (
      <div className={style.loginForm}>
        {this.renderInput('phone', {
          type: 'phone',
          placeholder: '请输入手机号码',
          children: '绑定手机号:'
        })}
        {this.renderSmsInput()}
        {this.renderInput('password', {
          type: 'password',
          placeholder: '请输入密码',
          children: '设置密码:'
        })}
        {this.renderInput('confirmPassword', {
          type: 'password',
          placeholder: '请再次输入密码',
          children: '确认密码:'
        })}
        {this.renderInput('realName', {
          children: '真实姓名:',
          placeholder: '请输入真实姓名'
        })}
        {this.renderInput('chineseId', {
          children: '身份证:',
          placeholder: '请输入身份证'
        })}
        <div className={style.operation}>
          <Button type="button" onClick={this.submit}>
            注册
          </Button>
        </div>
        <div className={style.extraNav}>
          <Link
            className={cx(style.extraNavLink, 'extra-nav-link')}
            onClick={onLoginLinkClick}
          >
            返回登录
          </Link>
        </div>
        <div className={cx(style.agreement, 'agreement-link')}>
          <Link href="https://my.xoyo.com/protocol/help/serviceProtocol">
            完成注册，即代表同意金山网络服务协议
          </Link>
        </div>
      </div>
    );
  }
}
