import { isIOS, isWeiXin } from './device-utils';
import invariant from './error-utils';
/**
 * 针对微信动态设置标题
 * @param title
 * @param imgUrl
 */
export function setTitle(title, imgUrl) {
  if (document.title === title) {
    return;
  }
  invariant(title, 'title could not be empty.');
  document.title = title;
  if (isIOS() && isWeiXin()) {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.setAttribute('src', imgUrl || '/favicon-114x114.png');
    const iframeCallback = function() {
      setTimeout(function() {
        iframe.removeEventListener('load', iframeCallback);
        document.body.removeChild(iframe);
      }, 0);
    };
    iframe.addEventListener('load', iframeCallback);
    document.body.appendChild(iframe);
  }
}
