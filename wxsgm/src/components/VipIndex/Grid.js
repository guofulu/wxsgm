import React from 'react';
import '../../assets/scss/vipIndex/grid.scss'
import { Drawer, Button, Radio } from 'antd';
const RadioGroup = Radio.Group;

class Grid extends React.Component {

    state = { visible: false, placement: 'bottom' };

    showDrawer = () => {
        this.setState({
        visible: true,
        });
    };

    onClose = () => {
        this.setState({
        visible: false,
        });
    };

    onChange = e => {
        this.setState({
        placement: e.target.value,
        });
    };


    render(){
       // console.log(45656454,this.props)
        const str = '<div data-v-5ef51161="" class="vip-plus-help-dialog__content"><p style="white-space: normal; text-align: center;"><span style="color: rgb(102, 102, 102);"><strong><span style="font-family: 微软雅黑;"></span></strong></span></p><p style="text-align: center;"><strong><span style="&quot;font-family:" microsoft="" font-size:="">VIP+会员权益解读</span></strong></p><p>&nbsp;</p><p>&nbsp;</p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">会员权益：</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102);">优先购票、专属票价、专享折扣、专享券、全场包邮、双倍积分、赠观演券、明星活动、免费期刊、生日专享</span></p><p>&nbsp;</p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(0, 0, 0);">权益详解：</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102);">（注：VIP+会员，以下简称V+会员）</span></p><p>&nbsp;</p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(0, 0, 0);">优先购票：</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102);">优先购票，既优先购，是聚橙会员专属的一种提前购买权益。为回馈V+会员，聚橙会不定期筛选重点演出项目支持V+会员优先购买，即会员可在演出对外公售前优先购票支付。（部分演出项目有购买张数的限制）</span></p><p>&nbsp;</p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(0, 0, 0);">专属票价：</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102);">V+会员可享受部分演出项目的专属会员价，还可同时享受其他满足条件的优惠，例如优惠券、满减促销等。（部分演出项目有购买张数的限制）</span></p><p>&nbsp;</p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(0, 0, 0);">专享折扣：</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102);">V+会员可享受部分演出项目的专属折扣，以更低的价格购票支付。专享折扣不与其他优惠叠加，例如优惠券、满减促销等。（部分演出项目有购买张数的限制）</span></p><p>&nbsp;</p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(0, 0, 0);">专享券：</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102);">V+会员可在会员专区不定期领取专享优惠券，先到先得，专享券的减免金额/适用范围/有效期以实际领券为准，优惠券不可叠加使用，不与其他优惠叠加，例如折扣促销等。</span></p><p>&nbsp;</p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(0, 0, 0);">全场包邮：</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102);">V+会员可享受专属无门槛免邮福利（仅支持中国大陆地区，不包括港澳台及海外），用于订单快递费的抵扣。</span></p><p>&nbsp;</p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(0, 0, 0);">双倍积分：</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102);">V+会员在聚橙网各平台购票可获得积分翻倍，积分可用于商品兑换。具体积分规则和可兑换商品请前往积分商城查看。</span></p><p>&nbsp;</p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(0, 0, 0);">赠观演券：</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102);">观演券是一种免费观看演出的会员权益。为回馈V+会员，聚橙会不定期赠送观演券。您可使用观演券兑换部分演出项目门票，门票有限，先兑先得（部分演出项目不定期补货，以实际情况为准）。观演券的有效期以实际领券为准，每张观演券可兑换一张演出票。</span></p><p>&nbsp;</p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(0, 0, 0);">明星活动：</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102);">V+会员可优先参与演出项目相关线下活动、艺术沙龙。</span></p><p>&nbsp;</p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(0, 0, 0);">免费期刊：</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102);">V+会员可不定期浏览精美演出资讯及期刊。</span></p><p>&nbsp;</p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(0, 0, 0);">生日专享：</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102);">聚橙为V+会员在生日当月准备了生日专享优惠券。使用优惠券能以更低的价格享受喜欢的演出项目，生日专享优惠券的减免金额/适用范围/有效期以实际领券为准，但生日专享优惠券不可叠加使用，不与其他优惠叠加，例如折扣促销等。</span></p><p>&nbsp;</p><p><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(102, 102, 102);">VIP+会员权益解释权归聚橙网所有，更多特权将陆续推出，敬请期待！</span></p><p style="white-space: normal; text-align: center;"><span style="font-size: 14px; color: rgb(102, 102, 102);"><strong><span style="font-size: 14px; font-family: 微软雅黑; color: rgb(63, 63, 63);"><br></span></strong><br></span></p><p>&nbsp;</p></div>'
        return (
            <>
                <div className={'right-grid'}>
                    <div className={"right-grid__row"}>
                        <div className={"right-cell right-grid__cell"}>
                            <div className={'right-cell__icon right-cell__icon--prior-buy'}></div>
                            <div className={"right-cell__name"}>
                                优先购票
                            </div>
                        </div>
                        <div className={"right-cell right-grid__cell"}>
                            <div className={'right-cell__icon right-cell__icon--prior-buy'}></div>
                            <div className={"right-cell__name"}>
                                专属票价
                            </div>
                        </div>
                        <div className={"right-cell right-grid__cell"}>
                            <div className={'right-cell__icon right-cell__icon--prior-buy'}></div>
                            <div className={"right-cell__name"}>
                                专享折扣
                            </div>
                        </div>
                        <div className={"right-cell right-grid__cell"}>
                            <div className={'right-cell__icon right-cell__icon--prior-buy'}></div>
                            <div className={"right-cell__name"}>
                                专享券
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className={"right-grid__row"}>
                        <div className={"right-cell right-grid__cell"}>
                            <div className={'right-cell__icon right-cell__icon--prior-buy'}></div>
                            <div className={"right-cell__name"}>
                                全场包邮
                            </div>
                        </div>
                        <div className={"right-cell right-grid__cell"}>
                            <div className={'right-cell__icon right-cell__icon--prior-buy'}></div>
                            <div className={"right-cell__name"}>
                                双倍积分
                            </div>
                        </div>
                        <div className={"right-cell right-grid__cell"}>
                            <div className={'right-cell__icon right-cell__icon--prior-buy'}></div>
                            <div className={"right-cell__name"}>
                                赠观影券
                            </div>
                        </div>
                        <div className={"right-cell right-grid__cell"}>
                            <div className={'right-cell__icon right-cell__icon--prior-buy'}></div>
                            <div className={"right-cell__name"}>
                                明星活动
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className={"right-grid__row"}>
                        <div className={"right-cell right-grid__cell"}>
                            <div className={'right-cell__icon right-cell__icon--prior-buy'}></div>
                            <div className={"right-cell__name"}>
                                免费期刊
                            </div>
                        </div>
                        <div className={"right-cell right-grid__cell"}>
                            <div className={'right-cell__icon right-cell__icon--prior-buy'}></div>
                            <div className={"right-cell__name"}>
                                生日专享
                            </div>
                        </div>
                        <div className={"right-cell right-grid__cell"}>
                            <div className={'right-cell__icon right-cell__icon--prior-buy'}></div>
                            <div className={"right-cell__name"}>
                                敬请期待
                            </div>
                        </div>
                        <div className={"right-cell right-grid__cell"}>
                            
                            <div className={"right-cell__name"}>
                                
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <button onClick={()=>{
                    this.props.history.push('/shop/vip/buy')
                }} className={'ju-button vip-plus__desc__content__btn ju-button--gold ju-button--full-round ju-button--middle ju-button--round'}>
                    立即开通
                    <span className={'vip-plus__desc__content__btn__price'}>{this.help.money(99)}</span>
                    <span className={'vip-plus__desc__content__btn__unit'}>/年</span>
                </button>
                <div className={'vip-plus__desc__content__rule'} onClick={this.showDrawer}>
                    使用规则
                </div>
                <Drawer
                    height={"12rem"}
                    title="使用规则"
                    placement={this.state.placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    >
                   <div dangerouslySetInnerHTML={{__html: str}}></div>
                </Drawer>
            </>
        )
    }
}

export default Grid