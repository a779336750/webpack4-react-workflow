import React from 'react';
import modalHoc from '@src/components/modal/modal-hoc';
import { debounceDecorator } from '@src/utils/designing-mode-utils';
import { deepCopy } from '@src/utils/copy-utils';
import { sarrowCopy } from '@src/utils/copy-utils';
import sort from '@src/utils/sort-utils';
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
    // this.sort([10, 3, 40, 8, 12]);
    console.log(sort([10, 3]));
  }
  render() {
    return <div className={'main'} />;
  }
}
