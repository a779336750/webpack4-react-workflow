import React from 'react';
// import Button from '@src/components/button';
import {
  // alertAwardIntro,
  // alertBlessingAction,
  // alertDuplicatedRedeem,
  // alertExchangePrize,
  // alertFailBless,
  // alertNoAward,
  // alertRules,
  // alertShareTip,
  // alertSuccessRedeem,
  // showPrizeInfoModal,
  // showShare,
  alertTest
} from './modal';
// import Toast from '@src/components/toast';
// import { delay } from '@src/utils/common-util';
export default class ModalTest extends React.Component {
  render() {
    return (
      <div>
        {/*<Button*/}
        {/*onClick={() =>*/}
        {/*alertExchangePrize(function({ close, value }) {*/}
        {/*const { roleId } = value;*/}
        {/*if (!roleId) {*/}
        {/*Toast.info('请先输入角色id');*/}
        {/*} else {*/}
        {/*console.log(value);*/}
        {/*close();*/}
        {/*}*/}
        {/*})*/}
        {/*}*/}
        {/*type="primary"*/}
        {/*>*/}
        {/*区服角色*/}
        {/*</Button>*/}

        {/*<Button onClick={alertRules}>规则</Button>*/}

        {/*<Button*/}
        {/*onClick={() =>*/}
        {/*alertDuplicatedRedeem({*/}
        {/*insist: async close => {*/}
        {/*alert('确定呀！！');*/}
        {/*await delay(1000);*/}
        {/*close();*/}
        {/*}*/}
        {/*})*/}
        {/*}*/}
        {/*>*/}
        {/*填写角色提示重复*/}
        {/*</Button>*/}

        {/*<Button*/}
        {/*onClick={() =>*/}
        {/*alertSuccessRedeem(function() {*/}
        {/*alert('返回首页咯');*/}
        {/*})*/}
        {/*}*/}
        {/*>*/}
        {/*提交成功*/}
        {/*</Button>*/}

        {/*<Button onClick={alertNoAward}>兑换奖励（没有奖励）</Button>*/}

        {/*<Button onClick={alertAwardIntro}>兑换奖励（说明弹窗）</Button>*/}
        {/*<Button*/}
        {/*onClick={() =>*/}
        {/*alertFailBless({*/}
        {/*title: '您已对他赐过福了',*/}
        {/*content: '只能对同一个好友赐福一次',*/}
        {/*handleClick: () => alert('查看我的福袋')*/}
        {/*})*/}
        {/*}*/}
        {/*>*/}
        {/*赐福失败: 已赐过福*/}
        {/*</Button>*/}
        {/*<Button*/}
        {/*onClick={() =>*/}
        {/*alertFailBless({*/}
        {/*title: '您的祝福已经全部送出去了哦~',*/}
        {/*content: '一个人只能赐福33次哦（包括主动赐福和被赐福数）',*/}
        {/*handleClick: () => alert('查看我的福袋')*/}
        {/*})*/}
        {/*}*/}
        {/*>*/}
        {/*赐福失败: 赐福次数已达到33次*/}
        {/*</Button>*/}
        {/*<Button*/}
        {/*onClick={() => {*/}
        {/*alertFailBless({*/}
        {/*title: '赐福失败',*/}
        {/*content: '其他原因',*/}
        {/*handleClick: () => alert('查看我的福袋')*/}
        {/*});*/}
        {/*}}*/}
        {/*>*/}
        {/*其他赐福失败弹窗*/}
        {/*</Button>*/}
        {/*<Button onClick={alertShareTip}>分享弹窗</Button>*/}
        {/*<Button*/}
        {/*onClick={() =>*/}
        {/*showShare({*/}
        {/*imgUrl:*/}
        {/*'http://test-zt.xoyo.com/huangzhe/fudai/share.jpg?pc_hash=yc6UE8'*/}
        {/*})*/}
        {/*}*/}
        {/*>*/}
        {/*自己的晒一晒弹窗*/}
        {/*</Button>*/}
        {/*<Button*/}
        {/*onClick={() =>*/}
        {/*showShare({*/}
        {/*imgUrl:*/}
        {/*'http://test-zt.xoyo.com/huangzhe/fudai/share.jpg?pc_hash=yc6UE8',*/}
        {/*receiveMyBagClick: () => alert('去领取我的福袋')*/}
        {/*})*/}
        {/*}*/}
        {/*>*/}
        {/*别人的晒一晒弹窗（有领取我的福袋按钮）*/}
        {/*</Button>*/}

        {/*<Button*/}
        {/*onClick={() =>*/}
        {/*showPrizeInfoModal({*/}
        {/*record: {*/}
        {/*server_name: 'and服务器1',*/}
        {/*platform_name: '安卓',*/}
        {/*role_name: '测试',*/}
        {/*role_id: '123',*/}
        {/*created_at: '2018-12-25 09:57:35',*/}
        {/*blessing: '84.00',*/}
        {/*fireworks: 0*/}
        {/*}*/}
        {/*})*/}
        {/*}*/}
        {/*>*/}
        {/*获奖信息弹窗*/}
        {/*</Button>*/}
        {/*<Button*/}
        {/*onClick={async () => {*/}
        {/*const { close } = alertBlessingAction();*/}
        {/*await delay(3000);*/}
        {/*close();*/}
        {/*}}*/}
        {/*>*/}
        {/*赐福操作*/}
        {/*</Button>*/}
        <button
          onClick={async () => {
            const { close } = alertTest();
          }}
        >
          测试弹窗
        </button>
      </div>
    );
  }
}
