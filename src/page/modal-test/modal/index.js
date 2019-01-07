import React from 'react';
import Modal from '../../../components/modal';
// import AddressPicker from '@src/blessing-components/modal/exchange';
// import Rules from '@src/blessing-components/modal/rules';
// import ModalNormal from '@src/blessing-components/modal/normal';
// import ShareTip from '@src/blessing-components/modal/share-tip';
// import SharePage from '@src/templates/share';
// import TemplateExchangeDetail from '@src/templates/exchange-detail';
// import BlessingAction from '@src/blessing-components/modal/blessing-action';
import Test from '../../modal-list/test';

// 弹出兑奖弹窗
// export const alertExchangePrize = callback => {
//   const { close } = Modal.append(props => (
//     <AddressPicker
//       close={() => close()}
//       onClick={value => {
//         if (typeof callback === 'function') {
//           callback({ value, close });
//         }
//       }}
//       {...props}
//     />
//   ));
// };
//
// export const alertRules = () => {
//   const { close } = Modal.append(props => (
//     <Rules close={() => close()} {...props} />
//   ));
// };
//
// export const alertNormal = ({ title, content, confirm, cancel }) => {
//   const businessProps = { title, content, confirm, cancel };
//   const { close } = Modal.append(props => (
//     <ModalNormal close={() => close()} {...props} {...businessProps} />
//   ));
// };
//
// export const alertDuplicatedRedeem = ({ insist }) => {
//   alertNormal({
//     title: '该角色已经在其他微信号兑奖过了！',
//     content: '若继续使用该角色兑奖，官方最终会向该角色发放价值较高的那一份',
//     confirm: {
//       handleClick: close => {
//         if (insist && typeof insist === 'function') {
//           insist(close);
//         } else {
//           close();
//         }
//       },
//       text: '继续兑换'
//     },
//     cancel: { handleClick: close => close(), text: '重新选择' }
//   });
// };
//
// export const alertSuccessRedeem = handleClick => {
//   alertNormal({
//     title: '提交成功',
//     content: '奖励于1月14日统一发放哦~',
//     confirm: {
//       text: '返回首页',
//       handleClick: close => {
//         close();
//         if (handleClick && typeof handleClick === 'function') {
//           handleClick();
//         }
//       }
//     }
//   });
// };
//
// // 兑换奖励（没有奖励）
// export const alertNoAward = () => {
//   alertNormal({
//     content: (
//       <div style={{ textAlign: 'center', marginTop: '60px', textIndent: '0' }}>
//         暂时没有可兑换的奖励哦！
//       </div>
//     ),
//     confirm: {
//       text: '确定',
//       handleClick: close => close()
//     }
//   });
// };
//
// //兑换奖励（说明弹窗）
// export const alertAwardIntro = () => {
//   alertNormal({
//     content: (
//       <div>
//         <p>（1）01-13日零点后，即可开始兑换福袋</p>
//         <p>
//           （2）若集满33个福袋（包括收到的和赐福回礼）可以提前填写聚福兑换信息
//         </p>
//       </div>
//     ),
//     confirm: {
//       text: '确定',
//       handleClick: close => close()
//     }
//   });
// };
//
// // 通用赐福失败弹窗
// export const alertFailBless = ({ title, content, handleClick }) => {
//   alertNormal({
//     title,
//     content,
//     confirm: {
//       text: '查看我的福袋',
//       handleClick: close => {
//         close();
//         handleClick && handleClick();
//       }
//     }
//   });
// };
//
// export const alertShareTip = () => {
//   const { close } = Modal.append(props => (
//     <ShareTip onClick={() => close()} {...props} />
//   ));
// };
//
// export const showShare = componentProps => {
//   const { close } = Modal.append(props => (
//     <SharePage {...props} {...componentProps} close={() => close()} />
//   ));
// };
//
// export const showPrizeInfoModal = componentProps => {
//   const { close } = Modal.append(props => {
//     const finalProps = {
//       ...props,
//       ...componentProps,
//       close: () => close()
//     };
//     return <TemplateExchangeDetail {...finalProps} />;
//   });
// };
//
// export const alertBlessingAction = () => {
//   return Modal.append(props => <BlessingAction {...props} />);
// };

export const alertTest = () => {
  return Modal.append(props => <Test {...props} />);
};
