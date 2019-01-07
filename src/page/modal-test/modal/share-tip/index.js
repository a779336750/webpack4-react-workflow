import React from 'react';
import styles from './style/index.less';
import ModalHOC from '@src/components/modal/modal-hoc';

@ModalHOC({ frameless: true })
export default class ShareTip extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className={styles.shareRoot} onClick={onClick}>
        <img
          className={styles.shareTipImg}
          src={require('./images/share-tip.png')}
          alt={'share img'}
        />
      </div>
    );
  }
}
