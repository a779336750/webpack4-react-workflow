import React from 'react';
import modalHoc from '@src/components/modal/modal-hoc';
import { debounceDecorator } from '@src/utils/designing-mode-utils';
import { deepCopy } from '@src/utils/copy-utils';
import { sarrowCopy } from '@src/utils/copy-utils';
import { htmlToArray } from '@src/utils/data-utils';
import ScrollToTop from '@src/components/scroll-to-top';
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
  componentDidMount() {
    console.log(document.getElementsByTagName('div'));
    console.log(htmlToArray(document.getElementsByTagName('div')));
    // this.showLength('sacassc');
    console.log(this.showLength.length);
  }
  showLength(text) {
    console.log(this.showLength.length);
  }
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
    return (
      <div className={'main'}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
