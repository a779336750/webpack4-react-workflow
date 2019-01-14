import React from 'react';
import styles from './index.less';
import Modal from '@src/page/modal';
import Collapse from '@src/components/collapse';
export default class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className={'main'}>
        <Collapse>
          <h1>hahahah</h1>
        </Collapse>
      </div>
    );
  }
}
