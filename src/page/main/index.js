import React from 'react';
import modalHoc from '@src/components/modal-hoc';
import { debounceDecorator } from '@src/utils/designing-mode-utils';
import { removeDuplicate } from '@src/utils/data-utils';
import { autobind } from 'core-decorators';

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
  componentDidMount() {}

  @debounceDecorator(300)
  showHi(name) {
    console.log('hahahahahahaha,' + name);
  }
  show1 = () => {
    console.log('sacsaas');
  };
  @autobind
  show2() {
    console.log('sacsaas');
  }
  render() {
    return <div className={'main'}>jajajasacsacjs</div>;
  }
}
