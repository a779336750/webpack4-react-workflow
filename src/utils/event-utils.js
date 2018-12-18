/**
 * 兼容的事件方法汇总
 */
export let EventUtil = {
  /**
   * 解绑事件
   * @param ele:解绑事件的dom元素
   * @param eventName：要解绑的事件，名
   * @param handler：事件处理函数
   */
  removeHandler: function(ele, eventName, handler) {
    if (ele.removeEventListener) {
      ele.removeEventListener(eventName, handler);
    } else if (ele.detachEvent) {
      ele.detachEvent('on' + eventName, handler);
    } else {
      ele['on' + eventName] = null;
    }
  },
  /**
   * 获取事件对象的兼容写法
   * @param event 事件处理函数的e参数（事件对象）
   * @returns {*|Event | undefined} 返回的兼容的事件对象
   */
  getEvent: function(event) {
    return event || window.event;
  },
  /**
   * 获取实践对象的目标元素
   * @param event：事件处理函数的e参数（事件对象）
   * @returns {*|Object|Element}：返回的兼容的目标元素
   */
  getTarget: function(event) {
    return event.target || event.srcElement;
  },
  /**
   * 防止默认事件
   * @param event
   */
  preventDefault: function(event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  /**
   * 防止事件冒泡
   * @param event
   */
  stopPropagation: function(event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  },
  /**
   * 事件委托
   * @param parentEle:将要注册事件的父元素
   * @param eventName:事件名称
   * @param selector:选择器，可以是className或者tagName
   * @param handler：事件的执行函数
   */
  entrust_on: function(parentEle, eventName, selector, handler) {
    let a = function(ev) {
      let event = ev || window.event;
      let target = event.target || event.srcElement;
      if (selector.charAt(0) !== '.' && selector.charAt(0) !== '#') {
        if (target.tagName.toLowerCase() === selector) {
          if (event.preventDefault) {
            event.preventDefault();
          } else {
            event.returnValue = false;
          }
          handler();
        }
      } else if (selector.charAt(0) === '.') {
        if (target.className === selector.substring(1)) {
          if (event.preventDefault) {
            event.preventDefault();
          } else {
            event.returnValue = false;
          }
          handler();
        }
      }
    };
    this.addHandler(parentEle, eventName, a);
  }
};
