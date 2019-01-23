import * as React from 'react';
import styles from './index.less';
import { Progress } from 'antd-mobile';
export default class MyProgress extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { color, backgroundColor, percent } = this.props;
    return (
      <div className={styles.myProgress}>
        <Progress percent={30} />
      </div>
    );
  }
}
MyProgress.defaultProps = {
  percent: 50
};
