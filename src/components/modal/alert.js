import React from 'react';
import Modal from './index';

const alert = extraProps => {
  const { close } = Modal.append(props => {
    const finalProps = { ...props, ...extraProps };
    if (Array.isArray(finalProps.footer)) {
      finalProps.footer = finalProps.footer.map(button => {
        const originPress = button.onPress || function() {};
        button.onPress = () => {
          const res = originPress(finalProps);
          if (res && res.then) {
            res
              .then(() => {
                close();
              })
              .catch(() => {});
          } else {
            close();
          }
        };
        return button;
      });
    }
    return <Modal {...props} {...extraProps} />;
  });
  return close;
};

export default alert;
