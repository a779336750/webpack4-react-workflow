import React from 'react';
import styles from './css/style.less';
import BannerBack from '@src/blessing-components/banner-back';
import ModalHOC from '@src/components/modal/modal-hoc';

@ModalHOC({ frameless: true })
export default class Rules extends React.Component {
  render() {
    const { close } = this.props;
    return (
      <div className={styles['rules']}>
        <BannerBack title="规则和奖励" handleBackClick={close} />
        <div className="xfe-rules-root">
          <div className="xfe-rules-layer-1" data-name="背景" />
          <div className="xfe-rules-group-1" data-name="聚福有礼">
            <div className="xfe-rules-layer-2" data-name="标题 - 聚福有礼" />
            <div className="xfe-rules-layer-3" data-name="烟花图" />
            <div className="xfe-rules-layer-4" data-name="元宝图" />
            <div
              className="xfe-rules-layer-5"
              data-name="【绑定元宝】  文案"
              data-text="【绑定元宝】
                福气值可1：1等额兑换
                为游戏内绑定元宝"
            />
            <div
              className="xfe-rules-layer-6"
              data-name="【烟花•金辉齐鸣】  文案"
              data-text="【烟花•金辉齐鸣】
                送出福袋，有几率获得
                烟花奖励，双方每人一份"
            />
          </div>
          <div className="xfe-rules-group-2" data-name="活动规则">
            <div className="xfe-rules-layer-7" data-name="标题 - 活动规则" />
            <div
              className="xfe-rules-layer-8"
              data-name="文案 - 具体规则"
              data-text="一，活动时间： 12.28—01.11
                  二，奖励发放时间：01.14
                  三，福气值聚集规则:
                  1、用户可通过召集好友为自己福袋聚福或为他人福袋送福获
                        得回馈来让自己的新年福袋变厚！
                  3、每次送出祝福，自己将获得与好友等额福气值回馈
                  2、每名微信用户仅能对同一名微信用户送福一次。
                  四，奖励兑换规则：
                  1、每名微信用户都可领取一份属于自己的新年福袋（福袋内的
                  福气值将可1：1等额比例兑换为《剑侠世界2》手游绑定元宝）
                  五，填写福气值兑换信息
                  1、每个用户的新年福袋最多只能承受33份祝福（包含他人给予
                  的祝福+自己为他人祝福所获得的回馈），当祝福承受达到上限
                  时，其他用户将无法再为该福袋祝福，该福袋主人为他人祝福时
                  也将不再收到祝福回馈。
                  2、当新年福袋达到上限或活动结束后，用户将可以输入自己的
                  领取奖励区服角色信息，只有成功并且正确登记领取信息后，
                  奖励才会在规定时间正常发放。
                  六，奖励领取：
                  1、福气值锁定后，用户将可以输入自己的领取奖励区服角色信息
                  2、一个角色若被多个微信号填写为领奖角色，则官方最终会以
                  价值量最高的那份奖品发放
                  七，奖励发放：
                  需要玩家登记信息后，统一导出数据，由系统执行脚本发放。
                  八，随机赠送福气值概率：
                  烟花概率，2%；获得0.01时，必得1 烟花。"
            />
            <div className="xfe-rules-layer-9" data-name="表格" />
          </div>
        </div>
      </div>
    );
  }
}
