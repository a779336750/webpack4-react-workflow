import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 拦截 componentWillUnmount
 * @param componentContext
 * @param action
 */
function interceptComponentWillUnmount(componentContext, action) {
  if (componentContext) {
    const raw = componentContext.componentWillUnmount;
    componentContext.componentWillUnmount = function() {
      action && action.apply(componentContext);
      /**
       * 传入 componentContext 为了修正 react hot loader 的二次处理
       */
      raw && raw.apply(componentContext);
    };
  }
}

export default function append(ModalElement, componentContext) {
  const div = document.createElement('div');
  document.body.appendChild(div);

  function close() {
    ReactDOM.unmountComponentAtNode(div);
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  const element = React.createElement(ModalElement, {
    visible: true,
    onClose: close
  });
  ReactDOM.render(element, div);
  interceptComponentWillUnmount(componentContext, close);
  return { close };
}
