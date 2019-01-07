import React from 'react';
import styles from './index.less';
import ModalHOC from '@src/components/modal/modal-hoc';

@ModalHOC({ frameless: true })
export default class BlessingAction extends React.Component {
  render() {
    return (
      <div className={styles['container']}>
        <img src={require('./images/blessing.gif')} width="100%" />
      </div>
    );
  }
}
