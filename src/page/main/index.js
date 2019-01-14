import React from 'react';
import styles from './index.less';
import Modal from '@src/page/modal';
import ModalDialog from '@src/components/modal-dialog';
export default class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className={'main'}>
        <Modal />
        <ModalDialog />
      </div>
    );
  }
}
