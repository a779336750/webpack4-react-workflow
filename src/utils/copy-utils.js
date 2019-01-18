/**
 * 递归实现深拷贝
 * @param initObj
 * @param newObj
 * @return {*|{}}
 */
export function deepCopy(initObj, newObj) {
  let obj = newObj || {};
  /**
   * 防止自身调用产生死循环
   */
  for (let i in initObj) {
    let prop = initObj[i];
    if (prop === obj) {
      continue;
    }
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

/**
 * 浅拷贝
 * @param obj:被拷贝的对象
 */
export function sarrowCopy(target) {
  let newObj = {};
  Object.assign(newObj, target);
  return newObj;
}
