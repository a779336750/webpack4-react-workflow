import * as React from 'react';
import { InputItem } from 'antd-mobile';
import Toast from '@src/components/toast';

export default class Input extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onErrorClick = this.onErrorClick.bind(this);
  }

  onErrorClick() {
    const { errorMessage } = this.props;
    errorMessage && Toast.info(errorMessage);
  }

  render() {
    const { errorMessage, className, ...restProps } = this.props;
    return (
      <InputItem
        {...restProps}
        className={className}
        error={errorMessage}
        onErrorClick={this.onErrorClick}
      />
    );
  }
}
