import * as React from 'react';
import './style/index.less';
import classnames from 'classnames';
import styles from './style/index.less';
export default class ImagesSlider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.imageSlider = React.createRef();
  }

  componentDidMount() {
    const { callbackLeft, callbackRight } = this.props;
    this.touchFunc(this.imageSlider.current, 'left', callbackLeft);
    this.touchFunc(this.imageSlider.current, 'right', callbackRight);
  }

  touchFunc(obj, type, func) {
    //滑动范围在5x5内则做点击处理，s是开始，e是结束
    let init = { x: 5, y: 5, sx: 0, sy: 0, ex: 0, ey: 0 };
    let sTime = 0,
      eTime = 0;
    type = type.toLowerCase();

    obj.addEventListener(
      'touchstart',
      event => {
        sTime = new Date().getTime();
        init.sx = event.targetTouches[0].pageX;
        init.sy = event.targetTouches[0].pageY;
        init.ex = init.sx;
        init.ey = init.sy;
        if (type.indexOf('start') !== -1) func();
      },
      false
    );

    obj.addEventListener(
      'touchmove',
      event => {
        event.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动
        init.ex = event.targetTouches[0].pageX;
        init.ey = event.targetTouches[0].pageY;
        if (type.indexOf('move') !== -1) func();
      },
      false
    );

    obj.addEventListener(
      'touchend',
      () => {
        let changeX = init.sx - init.ex;
        let changeY = init.sy - init.ey;
        if (
          Math.abs(changeX) > Math.abs(changeY) &&
          Math.abs(changeY) > init.y
        ) {
          //左右事件
          if (changeX > 0) {
            if (type.indexOf('left') !== -1) func();
          } else {
            if (type.indexOf('right') !== -1) func();
          }
        } else if (
          Math.abs(changeY) > Math.abs(changeX) &&
          Math.abs(changeX) > init.x
        ) {
          //上下事件
          if (changeY > 0) {
            if (type.indexOf('top') !== -1) func();
          } else {
            if (type.indexOf('down') !== -1) func();
          }
        } else if (Math.abs(changeX) < init.x && Math.abs(changeY) < init.y) {
          eTime = new Date().getTime();
          //点击事件，此处根据时间差细分下
          if (eTime - sTime > 300) {
            if (type.indexOf('long') !== -1) func(); //长按
          } else {
            if (type.indexOf('click') !== -1) func(); //当点击处理
          }
        }
        if (type.indexOf('end') !== -1) func();
      },
      false
    );
  }

  render() {
    const { prefixCls, userClassName } = this.props;
    return (
      <div className={classnames(prefixCls, userClassName, styles.slider)} ref={this.imageSlider}>
        {React.Children.map(this.props.children, child => {
          return child;
        })}
      </div>
    );
  }
}

ImagesSlider.defaultProps = {
  /**
   *prefixCls:
   *默认值：full_screen_scroll
   *定义：命名空间，防止css命名冲突,index.less用于该组件最外层div
   */
  prefixCls: 'imageSlider',

  /**
   *userClassName:
   *默认值：''
   *定义：用户自定义命名空间，用于该组件最外层div，方便用户修改组件的样式
   */
  userClassName: '',

  /**
   *callbackLeft:
   *默认值：''
   *定义：向左滑的回调事件
   */
  callbackLeft: () => {
    alert('left');
  },

  /**
   *callbackRight:
   *默认值：''
   *定义：向右滑的回调事件
   */
  callbackRight: () => {
    alert('right');
  }
};
