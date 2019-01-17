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
      setTimeout(multiStep, 25);
    } else {
      callback();
    }
  }, 25);
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
 *节流模式
 *throttle接受两个参数
 *第一个参数：要执行的函数
 *第二个参数：一个对象，
 *{
 *  context: null,//表示函数的作用域
 *  args: [],//函数的参数
 *  time:300//节流的时间间隔，即多个函数的触发时间间隔小于此时间，则只执行最后一个函数
 *}
 */
export function throttle() {
  let isClear = arguments[0],
    fn;
  if (typeof isClear === 'boolean') {
    fn = arguments[1];
    let clear = fn.throttleId && clearTimeout(fn.throttleId);
  } else {
    fn = isClear;
    let param = arguments[1];
    let p = {
      ...{
        context: null,
        args: [],
        time: 300
      },
      ...param
    };
    throttle(true, fn);
    fn.throttleId = setTimeout(function() {
      fn.call(p.context, p.args);
    }, p.time);
  }
}

/**
 *闭包实现节流模式
 *debounce
 *第一个参数：要执行的函数
 *第二个参数：节流时间间隔，
 *{
 *  context: null,//表示函数的作用域
 *  args: [],//函数的参数
 *  time:300//节流的时间间隔，即多个函数的触发时间间隔小于此时间，则只执行最后一个函数
 *}
 */
export function debounce(fn, time, params) {
  let timer = null;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn(params);
    }, time);
  };
}

/**
 *es7 decorator实现节流模式
 *time：节流时间间隔
 *使用方法：
 *
 *装饰：
 *@debounceDecorator(300)
 *showHi(name) {
 *  console.log('hahahahahahaha,' + name);
 *}
 *调用：
 *window.onscroll = this.showHi.bind(this, 'dick');
 *
 */
export function debounceDecorator(time) {
  return function(target, name, descriptor) {
    let timer = null;
    let originalFunc = descriptor.value;
    descriptor.value = function(...rest) {
      clearTimeout(timer);
      timer = setTimeout(function() {
        originalFunc(...rest);
      }, time);
    };
    return descriptor;
  };
}
