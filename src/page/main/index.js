import React from 'react';
import styles from './index.less';
import Modal from '@src/page/modal';
import StarRating from '@src/components/star-rating';
import Select from '@src/components/form/select';
export default class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className={'main'}>
        <StarRating />
      </div>
    );
  }
}
