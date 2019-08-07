import React from 'react';
import '../../assets/scss/vipIndex/grid.scss'
class Grid extends React.Component {

    render(){
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
                <button className={'ju-button vip-plus__desc__content__btn ju-button--gold ju-button--full-round ju-button--middle ju-button--round'}>
                    立即开通
                    <span className={'vip-plus__desc__content__btn__price'}>{this.help.money(99)}</span>
                    <span className={'vip-plus__desc__content__btn__unit'}>/年</span>
                </button>
                <div className={'vip-plus__desc__content__rule'}>
                    使用规则
                </div>
            </>
        )
    }
}

export default Grid