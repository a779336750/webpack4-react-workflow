import Cookie from 'js-cookie';
/**
 * 个人编写的cookie相关操作
 * name:cookie名
 * value:cookie值
 * number:cookie保存时间
 */
export let myCookie = {
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
 * 默认选择第三方库js-cookie
 */
export default Cookie;
