/**
 * 适配器常用类库
 */

/**
 * 修改函数fn，使之只接受n个参数，其余参数忽略
 * @param fn
 * @param n
 * @return {Function}
 */
export const ary = (fn, n) => {
  return (...args) => {
    fn(args.slice(0, n));
  };
};

/**
 * 将接受数组的函数装换成接受普通参数的方法
 * @param fn
 * @return {Function}
 * 使用方法如：
 * const PAll = collectInto(Promise.all.bind(Promise));
 * ...
 * PAll(p1, p2, p3).then(res => {
 *   console.log('done');
 * });
 */
export const collectInto = fn => (...args) => fn(args);

/**
 * 将多个调用相同参数的函数集合成一个数组进行调用
 * @param fn
 * @return {function(...[*]=): *}
 */
export const over = (...fns) => (...args) =>
  fns.map(fn => fn.apply(null, args));

/**
 * 指定函数参数的转换方式，对参数进行转换，返回一个新的函数
 * @param fn
 * @param transforms
 * @return {function(...[*]): *}
 * 使用方式如：
 * const square = n => n * n;
 * const double = n => n * 2;
 * const fn = overArgs((x, y) => [x, y], [square, double]);
 * console.log(fn(9, 3)); // [81, 6]
 */
export const overArgs = (fn, transforms) => (...args) =>
  fn(...args.map((val, i) => transforms[i](val)));
