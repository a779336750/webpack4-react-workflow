/**
 * 通过extend方法添加getClientTop方法,获取元素相对浏览器上部高度
 * @param ele:要获取相对浏览器上部高度的dom元素
 * @returns {number}：元素相对浏览器上部高度
 */
export function getClientTop(ele) {
  let top = 0;
  while (ele !== null) {
    top += ele.offsetTop;
    ele = ele.offsetParent;
  }
  return top;
}

/**
 * 通过extend方法添加getClientLeft方法
 * 获取元素相对浏览器左侧高度
 * @param ele:要获取相对浏览器左侧高度的dom元素
 * @returns {number}：相对浏览器左侧高度的dom元素
 */
export function getClientLeft(ele) {
  let Left = 0;
  while (ele !== null) {
    Left += ele.offsetLeft;
    ele = ele.offsetParent;
  }
  return Left;
}

/**
 * 获取浏览器文档高度和长度
 * @returns {{height: number, width: number}}：height属性为高度，width属性为长度
 */
export function getDocumentSize() {
  return {
    height: Math.max(
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    ),
    width: Math.max(
      document.documentElement.scrollWidth,
      document.documentElement.clientWidth
    )
  };
}

/**
 * 数组排序:
 * @param arr:需要改变顺序的数组
 * @param sortMethods:具有两个值:'up'代表升序,'dowm'代表降序
 * @returns :返回新的数组
 */
export function newSort(arr, sortMethods) {
  function upSort(arg1, arg2) {
    return arg1 > arg2;
  }

  function downSort(arg1, arg2) {
    return arg1 < arg2;
  }

  switch (sortMethods) {
    case 'up':
      return arr.sort(this.upSort);
    case 'down':
      return arr.sort(this.downSort);
    default:
      return arr.sort(this.upSort);
  }
}

export function countUp(deadLine) {
  for (let i = 0; i <= deadLine; i++) {
    setTimeout(
      (function(num) {
        return function() {
          console.log(num);
        };
      })(i),
      i * 1000
    );
  }
}

/**
 * 倒计时：
 * @param deadLine:倒计时时间长度
 */
export function countDown(deadLine) {
  for (let i = 0; i <= deadLine; i++) {
    (function(i) {
      setTimeout(function() {
        console.log(i);
      }, i * 1000);
    })(i);
  }
}

//

/**
 * 创建元素
 * @param tag:元素标签名
 * @param attrs:创建的元素的属性
 * @returns {HTMLElement}:返回创建的元素
 */
export function create(tag, attrs) {
  let ele = document.createElement(tag);
  if (typeof attrs === 'object') {
    for (let i in attrs) {
      ele.setAttribute(i, attrs[i]);
    }
  } else {
    throw new Error('type of attr must be "object"');
  }
  return ele;
}

/**
 * URL中查询字符串中的参数
 * @param url
 * @returns {null}:返回的查询字符串名值构成的对象
 */
export function getUrlParams(paramUrl) {
  let url = paramUrl || window.location.href;
  if (url.indexOf('?') < 0) return null;
  //拖不存在查询字符串，则返回null
  let paramList = url.split('?')[1].split('&');
  let params = {};
  for (let i = 0, len = paramList.length; i < len; i++) {
    let s = paramList[i].split('=');
    params[s[0]] = s[1];
  }
  return params;
}

/**
 * 去重
 * @param arr：希望去重的数组
 * @returns {Array}
 */
export function removeRepetition(arr) {
  // 去重
  let result = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr.indexOf(arr[i], i + 1) < 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

/**
 * 插入某个script标签到head标签内
 * @param src：script标签的src
 * @returns {Promise<any>}:返回一个promise
 */
export function injectScriptToHeadPromise(src) {
  return new Promise(function(resolve, reject) {
    let headEl = document.getElementsByTagName('head')[0];
    let scriptEl = document.createElement('script');
    scriptEl.src = src;
    scriptEl.onload = resolve;
    scriptEl.onerror = reject;
    headEl.appendChild(scriptEl);
  });
}

/**
 * 插入某个script标签到body标签尾部
 * @param src：script标签的src
 * @returns {Promise<any>}:返回一个promise
 */
export function injectScriptToBodyPromise(src) {
  return new Promise(function(resolve, reject) {
    let headEl = document.getElementsByTagName('body')[0];
    let scriptEl = document.createElement('script');
    scriptEl.src = src;
    scriptEl.onload = resolve;
    scriptEl.onerror = reject;
    headEl.appendChild(scriptEl);
  });
  /**
   * 在html的body标签末尾处插入script
   */
}
