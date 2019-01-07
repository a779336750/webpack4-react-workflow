import React from 'react';
import ZoneServerRoleNameJx2 from '@src/components/form/ZoneServerRoleNameJx2';
import styles from './style/index.less';
import BannerBack from '@src/blessing-components/banner-back';
import ModalHOC from '@src/components/modal/modal-hoc';

@ModalHOC({ frameless: true })
export default class AddressPicker extends React.Component {
  render() {
    const { onClick, close } = this.props;

    return (
      <div className={styles.exchangeModal}>
        <BannerBack title="规则和奖励" handleBackClick={close} />

        <div className={styles.tipMessage}>填写奖励兑换信息后，不可再更改</div>
        <div className={styles.from}>
          <div className={styles.zoneServerPicker} />
          <div className={styles.roleName} />
          <div className={styles.roleId} />
        </div>
        <ZoneServerRoleNameJx2
          className={styles.formStyleComponent}
          redeem={v => {
            onClick(v);
          }}
        />
      </div>
    );
  }
}
