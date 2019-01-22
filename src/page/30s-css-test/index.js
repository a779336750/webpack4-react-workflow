import React from 'react';
import { Button } from 'antd-mobile';
import { mobileRemSizing } from '@src/utils/rem-utils';
import styles from '@src/useful-css/index.less';
export default class App extends React.Component {
  componentDidMount() {
    mobileRemSizing(7.5);
  }
  render() {
    return (
      <div className={'main'}>
        <div className={styles.animate_button_border}>
          <br />
          <br />
          <button className={styles.button}>Submit</button>
        </div>
      </div>
    );
  }
}
