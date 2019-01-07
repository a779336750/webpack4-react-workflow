import React from 'react';
import { Modal } from 'antd-mobile';
import BannerBack from '@src/blessing-components/banner-back';

export default class ModalWrapper extends React.Component {
  render() {
    const {
      children,
      visible,
      closeType,
      title,
      close,
      ...restProps
    } = this.props;
    return (
      <Modal visible={visible} {...restProps}>
        {closeType === 'banner' && (
          <BannerBack title={title} handleBackClick={close} />
        )}
        {children}
      </Modal>
    );
  }
}
