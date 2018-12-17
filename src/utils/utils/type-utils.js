/**
 * 判断是否为Number类型
 * @param value
 * @return {boolean}
 */
export function isNumber(value) {
  return typeof value === 'number';
}
/**
 * 判断是否为string
 * @param value
 * @return {boolean}
 */
export function isString(value) {
  return typeof value === 'string';
}
/**
 * 判断是否为function
 * @param value
 * @return {boolean}
 */
export function isFunction(value) {
  return typeof value === 'function';
}
/**
 * 判断是否为boolean
 * @param value
 * @return {boolean}
 */
export function isBoolean(value) {
  return typeof value === 'boolean';
}
/**
 * 判断是否为undefined
 * @param value
 * @return {boolean}
 */
export function isUndefined(value) {
  return typeof value === 'undefined';
}
/**
 * 判断是否为Array类型
 * @param value
 * @return {boolean}
 */
export function isArray(value) {
  return isTypeOf(value, 'Array');
}

/**
 * 判断是否为Object
 * @param value
 * @return {boolean}
 */
export function isObject(value) {
  return isTypeOf(value, 'Object');
}

/**
 * 是否是null或者undefined
 * @param value
 * @return {boolean}
 */
export function isNullOrUndefined(value) {
  return value === null || isUndefined(value);
}
/**
 * 判断是否为RegExp
 * @param value
 * @return {boolean}
 */
export function isRegExp(value) {
  return isTypeOf(value, 'RegExp');
}

/**
 * 判断是否为对象的某种类型
 * @param value
 * @param type
 * @return {*}
 */
export function isTypeOf(value, type) {
  return Object.prototype.toString.call(value) === `[object ${type}]`;
}
