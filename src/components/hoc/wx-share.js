import wxApi from '@xfe/wx-api';
import didMount from '@src/components/hoc/did-mount';

const warning = content => console.warn(`[微信分享]: ${content}`);

/**
 * 校验分享对象是否合法
 * @param shareParams
 * @return {boolean}
 */
function validateShareParams(shareParams) {
  if (!shareParams) {
    warning('请提供微信分享参数对象');
    return false;
  } else {
    let warningMessages = [];
    const { title, link, $link, imgUrl, desc } = shareParams;
    title || warningMessages.push('<title> 标题');
    link || $link || warningMessages.push('<link> 或 <$link> 链接');
    imgUrl || warningMessages.push('<imgUrl> 图片地址');
    desc || warningMessages.push('<desc> 描述内容');

    if (warningMessages.length) {
      warning(`请提供微信分享参数 ${warningMessages.join(', ')}`);
      return false;
    }
  }
  return true;
}

/**
 * shareParams - 分享参数, 如:
 * @example
 * @wxShare({
 *  title: '剑侠世界手游，关注赢取小米MIX',
 *  $link: window.location.href,
 *  imgUrl: 'http://js.xoyo.com/zt/2016/10/operate/share.jpg',
 *  desc: '剑侠世界手游版 - 一生不可错过的浪漫武侠'
 * })
 * export default XXX extends React.Component...
 */
const wxShare = didMount(shareParams => {
  if (validateShareParams(shareParams)) {
    wxApi.share(shareParams);
  }
});

export default wxShare;
