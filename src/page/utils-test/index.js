import React from 'react';
import { mobileRemSizing } from '@src/utils/rem-utils';
import { ary } from '@src/utils/adapter-utils';
import { overArgs } from '@src/utils/adapter-utils';
export default class App extends React.Component {
  componentDidMount() {
    const square = n => n * n;
    const double = n => n * 2;
    const fn = overArgs((x, y) => [x, y], [square, double]);
    console.log(fn(9, 3)); // [81, 6]
  }
  showName(name) {
    console.log(this);
    console.log(name);
  }
  displayName(name) {
    console.log(this);
    console.log(name);
  }
  asyncTest() {
    setTimeout(function() {
      console.log('setTimeout');
    }, 0);
    new Promise(async res => {
      console.log('async1 start');
      await new Promise(resolve => {
        console.log('async2');
        resolve();
      }).then(res => {
        console.log('async3');
      });
      console.log('async1 end');
      res();
    }).then(resolve => {
      console.log('async4');
    });
    new Promise(function(resolve) {
      console.log('promise1');
      resolve();
    }).then(function() {
      console.log('promise2');
    });
    console.log('script end');
  }
  render() {
    return <div className={'main'}>ascas</div>;
  }
}
