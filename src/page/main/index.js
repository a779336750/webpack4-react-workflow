import React from 'react';
import styles from './index.less';
import ModalDialogHoc from '@src/components/modal-dialog-hoc';
import modalHoc from '@src/components/modal-hoc';
import { debounce } from '@src/utils/designing-mode-utils';
import { FlattenArray } from '@src/utils/data-utils';
@modalHoc
class HelloWorld1 extends React.Component {
  render() {
    return <div>hello world,111111</div>;
  }
}

@modalHoc
class HelloWorld2 extends React.Component {
  render() {
    return <div>hello world,222222</div>;
  }
}
export default class App extends React.Component {
  componentDidMount() {
    console.log(FlattenArray([[1, 2, 3, 4], [2, 21, 3, 3]]));
  }
  showModal1 = () => {
    HelloWorld1.show();
  };
  showModal2 = () => {
    HelloWorld2.show();
  };
  render() {
    return (
      <div className={'main'}>
        <button onClick={this.showModal1}>showModal1</button>
        <button onClick={this.showModal2}>showModal2</button>
      </div>
    );
  }
}
