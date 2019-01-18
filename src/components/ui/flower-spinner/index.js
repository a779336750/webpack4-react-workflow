import * as React from 'react';
import styles from './index.less';

export default class FlowerSpinner extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className={styles.flowerSpinner} onClick={onClick}>
        <div className={styles.animation} />
        <span className={styles.text} />
      </div>
    );
  }
}
