import React from 'react';
import styles from './index.less';
import ModalDialogHoc from '@src/components/modal-dialog-hoc';
import { debounce } from '@src/utils/designing-mode-utils';
@ModalDialogHoc
class HelloWorld extends React.Component {
  render() {
    return <div>hello world,{this.props.name}</div>;
  }
}
export default class App extends React.Component {
  showModal1 = () => {
    HelloWorld.show();
  };
  render() {
    return (
      <div className={'main'}>
        <button onClick={this.showModal1}>showModal1</button>
        <HelloWorld name={'dick'} />
      </div>
    );
  }
}
