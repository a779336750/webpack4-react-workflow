import React from 'react';
import ErrorUtils from '@src/utils/error-utils';
import TypeUtils from '@src//utils/type-utils';
import WechatUtils from '@src//utils/wechat-utils';
import didMount from '@src/components/hoc/did-mount';

const setTitle = didMount(getTitle => {
  let title;
  if (TypeUtils.isString(getTitle)) {
    title = getTitle;
  } else if (TypeUtils.isFunction(getTitle)) {
    title = getTitle(this.props);
  }
  ErrorUtils.invariant(
    TypeUtils.isString(title),
    'please provide valid title type. expect title to be string type'
  );
  WechatUtils.setTitle(title);
});

export default setTitle;
