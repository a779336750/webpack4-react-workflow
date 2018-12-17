import React, { Component } from 'react';
import styles from './index.less';

export default class Popup extends Component {
  closePopup() {
    return () => {
      const { closePopup } = this.props;
      closePopup();
    };
  }

  maskClick() {
    return e => {
      const { closePopup } = this.props;
      const target = e.target;
      const mask = document.getElementsByClassName(styles.mask)[0];
      if (target === mask) {
        closePopup();
        document.getElementsByClassName(styles.videoWraper)[0].style.display =
          'none';
      }
    };
  }

  render() {
    const { isShow, videoLink } = this.props;
    const iframeWraper = (
      <div
        className={styles.main}
        ref={el => {
          this.popup = el;
        }}
      >
        <div className={styles.mask} onClick={this.maskClick()}/>
        <div className={styles.videoWraper}>
          <video controls src={videoLink}/>
          <div
            className={styles.deleteBtn}
            ref={el => (this.videoIframe = el)}
            onClick={this.closePopup()}
          />
        </div>
      </div>
    );
    return <div>{isShow ? iframeWraper : <div/>}</div>;
  }
}

Popup.defaultProps = {
  /**
   * isShow:用于控制播放器的显隐
   */
  isShow: false,

  /**
   * videoLink:视频链接
   */
  videoLink: '//static.jx3.xoyo.com/landpage/20181204plcg1204.mp4',

  /**
   * closePopup:一个父组件传递过来的函数，用于关闭播放器，常见写法如下：
   *  closePopUp() {
   *    this.setState({
   *      isShow: false
   *    });
   *  }
   *
   *  注意：切记要在父组件的constructor方法中绑定this
   */
  closePopup: () => {}
};
