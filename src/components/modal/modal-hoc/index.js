import React from 'react';
import Modal from '@src/components/modal';

const ModalHOC = (extraProps = {}) => Component =>
  class extends React.PureComponent {
    componentDidMount() {
      const { visible } = this.props;
      if (!visible) {
        this.handleWindowOnLoad = () => {
          // noinspection JSUnusedLocalSymbols
          const { visible, ...restProps } = this.props;
          const { close } = Modal.append(() => (
            // display: none 背景图片不加载
            <div
              style={{
                width: 0,
                height: 0,
                visibility: 'hidden',
                overflow: 'hidden',
                position: 'absolute'
              }}
            >
              <Component {...restProps} />
            </div>
          ));

          this.close = close;
        };
        window.addEventListener('load', this.handleWindowOnLoad);
      }
    }

    removeWindowOnLoadListener() {
      window.removeEventListener('load', this.handleWindowOnLoad);
    }

    componentWillUpdate() {
      const { visible } = this.props;
      visible && this.removeWindowOnLoadListener();
    }

    componentWillUnmount() {
      this.close && this.close();
      this.removeWindowOnLoadListener();
    }

    render() {
      const { props } = this;
      return (
        <Modal {...extraProps} {...props}>
          <Component {...props} />
        </Modal>
      );
    }
  };

export default ModalHOC;
