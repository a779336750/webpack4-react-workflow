import { Toast as AntdToast } from 'antd-mobile';

export default class Toast {
  static info(content, duration) {
    AntdToast.info(content, duration, null, false);
  }

  static success(content, duration) {
    AntdToast.success(content, duration, null, false);
  }

  static fail(content, duration, onClose = null, mask = false) {
    AntdToast.fail(content, duration, onClose, mask);
  }

  static loading(content, duration) {
    AntdToast.loading(content, duration, null, false);
  }
}
