import * as React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less';
import { Modal } from 'antd-mobile';

const withDialog = WrappedComponent => {
  class EnhancedComponent extends React.Component {
    render() {
      return (
        <div className={styles.modal}>
          <div className={styles.mask} />

          <div className={styles.content}>
            <div
              className={styles.close}
              onClick={() => {
                this.props.onClose();
              }}
            >
              X
            </div>
            <WrappedComponent />
          </div>
        </div>
      );
    }
  }
  EnhancedComponent.show = params => {
    let container = document.createElement('div');
    document.body.appendChild(container);

    function closeHandle() {
      ReactDOM.unmountComponentAtNode(container);
      document.body.removeChild(container);
      container = null;
    }

    ReactDOM.render(
      <EnhancedComponent {...params} onClose={closeHandle} />,
      container
    );
  };

  return EnhancedComponent;
};
export default withDialog;
