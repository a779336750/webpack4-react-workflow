import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less';
import myImg from './images/test2.png';
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
