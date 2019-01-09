import React from 'react';
import styles from './index.less';
import Modal from '@src/page/modal';
export default class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className={styles.main}>
        <Modal />
      </div>
    );
  }
}
