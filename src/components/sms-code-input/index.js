import * as React from 'react';
import style from './index.less';
import Button from '@src/components/button';
import Input from '@src/components/input';
import Services from '@src/services';
import captchaHandlerDecorate from '@src/utils/captcha-deco-util';
import Toast from '@src/components/toast';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default class SmsCodeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countDown: null
    };
    this.onSmsButtonClick = this.onSmsButtonClick.bind(this);
  }

  async onSmsButtonClick() {
    const { validateAndGetPhone } = this.props;
    const phone = await validateAndGetPhone();
    if (phone) {
      await this.sendCode({ mobile: phone.replace(/\D+/g, '') });
      await this.countDown(60);
    }
  }

  async countDown(countDown) {
    const nextCountDown = countDown - 1;
    if (nextCountDown < 1) {
      this.setState({ countDown: null });
      return;
    }
    this.setState({ countDown: nextCountDown });
    await delay(1000);
    await this.countDown(nextCountDown);
  }

  @captchaHandlerDecorate()
  async sendCode({ mobile, ...authParams }) {
    try {
      return await Services.sendCode({ mobile, ...authParams });
    } catch (e) {
      e && e.message && Toast.info(e.message);
      throw e;
    }
  }

  renderButton() {
    let { buttonText = '获取验证码' } = this.props;
    const { countDown } = this.state;
    buttonText = countDown === null ? buttonText : `${countDown}秒后重试`;
    return (
      <Button
        size="medium"
        disabled={countDown}
        onClick={this.onSmsButtonClick}
      >
        {buttonText}
      </Button>
    );
  }

  render() {
    // noinspection JSUnusedLocalSymbols
    const { validateAndGetPhone, ...restProps } = this.props;
    return (
      <div className={style.smsCodeInput}>
        <div className={style.inputWrapper}>
          <Input
            {...restProps}
            labelNumber={4}
            children="短信验证码:"
            className="loginInput"
          />
        </div>
        <div className={style.smsButton}>{this.renderButton()}</div>
      </div>
    );
  }
}
