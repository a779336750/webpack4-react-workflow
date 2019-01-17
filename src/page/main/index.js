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
  componentDidMount() {
    console.log(removeDuplicate([1, 2, 3, 3, 2, 2, 2, 1, 1, 1, 1]));
    console.log(this.showHi.bind(this, 'dick'));
    window.onscroll = this.showHi.bind(this, 'dick');
  }

  @debounceDecorator(300)
  showHi(name) {
    console.log('hahahahahahaha,' + name);
  }

  render() {
    return (
      <div className={'main'}>
        <br />
        <br />
        <br />
        <br />
        sac
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
        scass
        <br />
        <br />
        scass
        <br />
        <br />
        scass
        <br />
        <br />
        scass
        <br />
        <br />
        scass
        <br />
        <br />
        scass
        <br />
        <br />
        scass
        <br />
        <br />
        scass
        <br />
        <br />
        scass
        <br />
        <br />
        scass
        <br />
        <br />
        scass
        <br />
        <br />
        scass
        <br />
      </div>
    );
  }
}
