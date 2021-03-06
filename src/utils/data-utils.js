import * as type from './type-utils';
import { Base64 } from 'js-base64';

/**
 * 对象转JSON
 * @param input
 * @return {string}
 */
export function objectToJson(input) {
  if (type.isObject(input)) {
    return JSON.stringify(input);
  } else {
    throw Error('type of input-antd must be a object');
  }
}

/**
 * url Base64转码
 * @param input
 * @return {*}
 */
export function base64UrlEncode(input) {
  return Base64.encodeURI(input);
}

/**
 * url Base64解码
 * @param input
 * @return {*}
 */
export function base64UrlDecode(input) {
  return Base64.decode(input);
}

/**
 * 获取页面url查询字符串
 * input-antd 页面url（location.href）
 * @param input
 */
export function getUrlParams(input) {
  const href = input || location.href;
  const paramsArr = href.split('?')[1].split('&');
  const paramsObj = {};
  paramsArr.map(item => {
    paramsObj[item.split('=')[0]] = item.split('=')[1];
    return null;
  });
  return paramsObj;
}

/**
 * 剔除指定 props
 * 来源: babel-runtime/helpers/objectWithoutProperties
 * 用法: withoutProps(this.props, ['status'])
 * @param obj
 * @param keys
 */
export function withoutProps(obj, keys) {
  const target = {};

  for (let i in obj) {
    // noinspection JSUnfilteredForInLoop
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

/**
 * html集合转数组
 * @param html_collection
 * @return {Array}
 */
export function htmlToArray(htmlCollection) {
  return Array.prototype.slice.call(htmlCollection);
  // 方法二:
  // return Array.prototype.concat.apply([], htmlCollection);
}

/**
 * 数组扁平化，将数组项为数组的数组转成一个数组，如：
 * [[1,2,3,4],[5,6]] 转为[1,2,3,4,5,6]
 * @param arr
 * @return {*}
 * @constructor
 */
export function flattenArray(arr) {
  return arr.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
  }, []);
}

/**
 * 计算数组的每个项的个数
 * @param arr
 * @return {*}
 * @constructor
 */
export function countingInstancesOfObject(arr) {
  return arr.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
      accumulator[currentValue]++;
    } else {
      accumulator[currentValue] = 1;
    }
    return accumulator;
  }, {});
}
/**
 * 根据对象数组的某个对象值属性进行分组
 * @param arr
 * @return {*}
 * @constructor
 */
export function GroupByProperty(arr, p) {
  return arr.reduce((accumulator, currentValue) => {
    let key = currentValue[p];
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(currentValue);
    return accumulator;
  }, {});
}

/**
 * 去重
 * @param arr
 * @return {*}
 * @constructor
 */
export function removeDuplicate(arr) {
  return arr.reduce((accumulator, currentValue) => {
    if (!accumulator.includes(currentValue)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
}
