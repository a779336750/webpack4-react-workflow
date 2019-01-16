import React from 'react';
import styles from './index.less';
import Modal from '@src/page/modal';
import StarRating from '@src/components/star-rating';
import Select from '@src/components/form/select';
import { debounce } from '@src/utils/designing-mode-utils';
export default class App extends React.Component {
  componentDidMount() {
    window.onscroll = debounce(function() {
      console.log('sacassc');
    }, 1000);
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
      </div>
    );
  }
}
