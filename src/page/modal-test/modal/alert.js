import React from 'react';
import ReactDOM from 'react-dom';
import ModalWrapper from '@src/blessing-components/modal/wrapper';

export default function nodeAlert({ content, props }) {
  const div = document.createElement('div');

  const visible = true;

  function close() {
    ReactDOM.unmountComponentAtNode(div);
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  document.body.appendChild(div);

  const modalProps = {
    ...props,
    close,
    visible
  };

  const component = (
    <ModalWrapper {...modalProps}>{content(close)}</ModalWrapper>
  );

  ReactDOM.render(component, div);

  return { close };
}
