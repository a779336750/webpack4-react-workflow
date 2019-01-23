import React from 'react';
import { Button } from 'antd-mobile';
import { mobileRemSizing } from '@src/utils/rem-utils';
import Progress from '@src/components/ui/progress';
import styles from './index.less';
export default class App extends React.Component {
  componentDidMount() {
    mobileRemSizing(7.5);
    console.log();
  }
  render() {
    return (
      <div className={'main'}>
        <br />
        <br />
        <br />
        <Progress />
      </div>
    );
  }
}
