import * as React from 'react';
import './style/index.less';
import classnames from 'classnames';
import Swiper from 'swiper/dist/js/swiper.js';
import styles from './style/index.less';
export default class FullScreenScroll extends React.PureComponent {
  componentDidMount() {
    const { autoplay, speed, swiperClassName } = this.props;
    this.mySwiper = new Swiper('.' + swiperClassName, {
      direction: 'vertical',
      resizeReInit: true,
      autoResize: false,
      /**
       * 可选选项，自动滑动
       */
      autoplay: autoplay,
      /**
       * 可选选项，自动播放时间间隔
       */
      speed: speed,
      onSlideChangeEnd: function(swiper) {
        alert('事件触发了;');
      },
      loop: true
    });
  }
  render() {
    const { prefixCls, userClassName, swiperClassName } = this.props;
    return (
      <div
        className={classnames(
          prefixCls,
          userClassName,
          styles.full_screen_scroll
        )}
      >
        <div className={swiperClassName}>
          <div className={'swiper-wrapper ' + styles.swiper_wrapper}>
            {this.props.children.map((item, index) => {
              return (
                <div
                  className={`swiper-slide ${styles.swiperSlide}`}
                  key={index}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

FullScreenScroll.defaultProps = {
  /**
   *prefixCls:
   *默认值：full_screen_scroll
   *定义：命名空间，防止css命名冲突,index.less用于该组件最外层div
   */
  prefixCls: 'full_screen_scroll',

  /**
   *userClassName:
   *默认值：''
   *定义：用户自定义命名空间，用于该组件最外层div，方便用户修改组件的样式
   */
  userClassName: '',

  /**
   *swiperClassName：
   *默认值：full-screen-scroll
   *定义：类名，用于swiper插件生成一个swiper
   */
  swiperClassName: 'full-screen-scroll',

  /**
   *autoplay：
   *默认值：true
   *定义：是否自动播放
   */
  autoplay: true,

  /**
   *speed：
   *默认值：2000
   *定义：自动滑动的时间间隔
   */
  speed: 2000
};
