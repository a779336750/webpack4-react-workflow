import React from 'react';
import { f } from './test';
import ModalDialog from '@src/components/modal-dialog';
import Toggle from '@src/components/Toggle';
export default class App extends React.Component {
  componentDidMount() {}
  showDialog() {
    ModalDialog.show({
      title: 'Hello, world!',
      closeOnClick: true,
      content: (
        <img src="https://github.com/30-seconds/30-seconds-of-react/blob/master/logo.png" />
      )
    });
  }
  render() {
    return (
      <div className={'hahahahaha'}>
        <Toggle />
      </div>
    );
  }
}
