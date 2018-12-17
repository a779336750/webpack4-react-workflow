import * as React from 'react';
import cx from 'classnames';
import styles from './index.less';

export default class MobileLayout extends React.Component {
  componentDidMount() {
    this.$main.scrollTop = 0;
  }

  render() {
    const { className, children } = this.props;
    return (
      <div className={cx(styles.root, className)}>
        <div ref={$dom => (this.$main = $dom)} className={styles.main}>
          {children}
        </div>
      </div>
    );
  }
}
