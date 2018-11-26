import React from 'react';
import styles from './index.less';
export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    const { pop } = this.props;
    return <div>{pop}</div>;
  }
}
