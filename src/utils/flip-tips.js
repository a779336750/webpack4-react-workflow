/**
 * 提示竖屏浏览
 */
export function horizontalTips() {
  let mask = document.createElement('div');
  mask.setAttribute(
    'style',
    'display:none;position:fixed;color:#ffffff;top:0;left:0;font-size:50px;text-align:center;line-height:100%;width:100%;height:100%;background-color:#000000;'
  );
  let text = document.createElement('div');
  text.innerHTML = '竖屏浏览效果更佳哦~';
  text.setAttribute('style', 'display:table-cell;vertical-align:middle;');
  mask.appendChild(text);
  document.body.appendChild(mask);
  if (window.orientation === 0) {
    mask.style.display = 'none';
  }
  if (window.orientation === 90) {
    mask.style.display = 'table';
  }
  window.onorientationchange = function() {
    if (window.orientation === 0) {
      mask.style.display = 'none';
    }
    if (window.orientation === 90) {
      mask.style.display = 'table';
    }
  };
}

/**
 * 提醒横屏浏览
 */
export function verticalTips() {
  let mask = document.createElement('div');
  mask.setAttribute(
    'style',
    'display:none;position:fixed;color:#ffffff;top:0;left:0;font-size:50px;text-align:center;line-height:100%;width:100%;height:100%;background-color:#000000;'
  );
  let text = document.createElement('div');
  text.innerHTML = '横屏浏览效果更佳哦~';
  text.setAttribute('style', 'display:table-cell;vertical-align:middle;');
  mask.appendChild(text);
  document.body.appendChild(mask);
  if (window.orientation === 0) {
    mask.style.display = 'table';
  }
  if (window.orientation === 90) {
    mask.style.display = 'none';
  }
  window.onorientationchange = function() {
    if (window.orientation === 0) {
      mask.style.display = 'table';
    }
    if (window.orientation === 90) {
      mask.style.display = 'none';
    }
  };
}
