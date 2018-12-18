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
 * 整合cookie相关操作
 * name:cookie名
 * value:cookie值
 * number:cookie保存时间
 */
export let Cookie = {
  setCookie: function(name, value, iDay) {
    let oDate = new Date();
    oDate.setDate(oDate.getDate() + iDay);
    document.cookie = name + '=' + value + ';expires=' + oDate;
  },
  //获取cookie
  getCookie: function(name) {
    let arr = document.cookie.split('; ');
    for (let i = 0; i < arr.length; i++) {
      let arr2 = arr[i].split('=');
      if (arr2[0] === name) {
        return arr2[1];
      }
    }
    return '';
  },
  //删除cookie
  removeCookie: function(name) {
    this.setCookie(name, 1, -1);
  }
};

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

export function deepCopy(initObj, newObj) {
  let obj = newObj || {};
  for (let i in initObj) {
    let prop = initObj[i];
    if (prop === obj) {
      continue;
    }
    //防止自身调用产生死循环
    if (typeof prop === 'object') {
      if (prop.constructor === Array) {
        obj[i] = [];
      } else {
        obj[i] = {};
      }
      deepCopy(prop, obj[i]);
    } else {
      obj[i] = prop;
    }
  }
  return obj;
}

/**
 * JSONParse实现的深拷贝
 * @param obj:被拷贝的对象
 * @returns {any}:一个新的对象
 * 注意:constructor始终为Object,只适用于扁平的对象，如Number,Array,String,扁平对象
 */
export function deepCopyByJSONParse(obj) {
  let newObj = {};
  newObj = JSON.parse(JSON.stringify(obj));
  return newObj;
}

//

/**
 * 网易rem移动布局
 * 把理想视口设置为布局视口
 *根据设计图宽度动态设置字体大小为100px;
 *设计图中所有的尺寸都除以100得出以rem单位的值
 *字体大小采用媒体查询
 * @param rate:比率，如宽度为750px的页面为750/100 = 7.5
 *
 */
export function mobileRemSizingByWangYi(rate) {
  let meta = document.createElement('meta');
  meta.setAttribute('name', 'viewport');
  document.head.appendChild(meta);
  document
    .querySelector('meta[name="viewport"]')
    .setAttribute(
      'content',
      'width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=0'
    );
  //把理想视口设置为布局视口
  document.documentElement.style.fontSize =
    document.documentElement.clientWidth / rate + 'px';
  //根据设计图宽度动态设置字体大小为100px;
}

/**
 * 装饰者模式 (应用于事件处理)
 * @param dom：注册事件的dom元素
 * @param type：事件类型
 * @param fn：事件处理函数
 */
export function decoration(dom, type, fn) {
  let originalEvent = dom[type];
  if (typeof dom[type] === 'function') {
    dom[type] = function() {
      originalEvent();
      fn();
    };
  } else {
    dom[type] = fn;
  }
}

/**
 * 简单模板模式
 * 定义：通过格式化字符串拼凑出视图避免创建视图时大量节点操作
 * 参数：
 * str:模板字符串:如<span>{#span#}</span>
 * data:添加到模板字符串的数据，如{span:'this is the data for label "span" '}
 * @param str
 * @param data
 * @returns {string | * | void}
 */
export function formateStrin(str, data) {
  return str.replace(/\{#(\w+)#\}/g, function(match, key) {
    return typeof data[key] === 'undefined' ? '' : data[key];
  });
}

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

export function toArray(html_collection) {
  // html集合转数组
  let arr = [];
  for (let i = 0; i < html_collection.length; i++) {
    arr[i] = html_collection[i];
  }
  return arr;
}

/**
 * 使用缓存，把以产生的计算结果缓存下来，方便下次使用。避免在多次调用函数时，重复计算。
 * @param fn:原函数的函数名
 * @param cache:可预先设定的缓存
 * @returns {function(*=): *}
 */
export function menoize(fn, cache) {
  let menonize_cache = cache || {};
  return function(arr) {
    if (!menonize_cache[arr]) {
      menonize_cache[arr] = fn(arr);
    }
    return menonize_cache[arr];
  };
}

export function multiStep(steps, args, callback) {
  // 使用定时器处理任务，避免长时间运行脚本导致浏览器假死
  // steps:任务的函数名的数组
  // args：处理函数的参数
  // callback：执行完的回调
  let tasks = steps.concat();
  setTimeout(function() {
    let task = tasks.shift();
    task.apply(null, args);
    if (tasks.length > 0) {
      setTimeout(arguments.callee, 25);
    } else {
      callback();
    }
  }, 25);
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
