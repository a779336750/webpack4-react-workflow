import React from 'react';
import styles from './css/style.less';
import ModalHOC from '@src/components/modal/modal-hoc';

@ModalHOC({ frameless: true })
export default class ModalNormal extends React.Component {
  renderBody = () => {
    const { title, content } = this.props;
    if (!title) {
      return (
        <div className="modal-normal-layer-5" data-name="仅内容">
          {content}
        </div>
      );
    }

    return (
      <div className="modal-normal-group-2" data-name="有标题">
        <div className="modal-normal-layer-3" data-name="标题">
          {title}
        </div>
        <div className="modal-normal-layer-4" data-name="内容">
          {content}
        </div>
      </div>
    );
  };

  renderButtons = () => {
    const { confirm, cancel, close } = this.props;
    if (!confirm && !cancel) {
      return null;
    }

    if (confirm && !cancel) {
      return (
        <div
          className="modal-normal-layer-6"
          data-name="查看我的福袋"
          onClick={() => confirm.handleClick(close)}
        >
          <div className={styles['button-text']}>{confirm.text}</div>
        </div>
      );
    }

    return (
      <div>
        <div
          className="modal-normal-layer-7"
          data-name="确定"
          onClick={() => confirm.handleClick(close)}
        >
          <div className={styles['button-text']}>{confirm.text}</div>
        </div>
        <div
          className="modal-normal-layer-8"
          data-name="取消"
          onClick={() => cancel.handleClick(close)}
        >
          <div className={styles['button-text']}>{cancel.text}</div>
        </div>
      </div>
    );
  };
  render() {
    const { close } = this.props;
    return (
      <div className={styles['modal-normal']}>
        <div className="modal-normal-root">
          <div className="modal-normal-layer-1" data-name="背景" />
          <div
            className="modal-normal-layer-2"
            data-name="关闭按钮"
            onClick={close}
          />
          <div className="modal-normal-group-1" data-name="主体">
            {this.renderBody()}
          </div>
          <div className="modal-normal-group-4" data-name="底部按钮">
            {this.renderButtons()}
          </div>
        </div>
      </div>
    );
  }
}
