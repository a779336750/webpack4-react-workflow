/**
 * rem布局
 * 把理想视口设置为布局视口
 *根据设计图宽度动态设置字体大小为100px;
 *设计图中所有的尺寸都除以100得出以rem单位的值
 * @param rate:比率，如宽度为750px的页面为750/100 = 7.5
 *
 */
export function mobileRemSizing(rate) {
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
