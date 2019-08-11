import React from 'react';
import '../../assets/scss/vipIndex/priorBuy.scss'
class PriorBuy extends React.Component{
    constructor(){
        super()
        this.state = {
            isShow:2
        }
    }
    render(){
        const data =  this.props.PriorBuyList.list;
        //console.log(data,234234234,this.props)
        return (
            <div className={"entry-block vip-plus__prior-buy"}>
                <div className={"entry-block__title"}>
                    优惠购票
                    <span className={"entry-block__title__desc"}></span>
                </div>
                <div className={"vip-plus-prior-buy"}>
                    <div className={"ju-tab vip-plus-prior-buy__tabs"}>
                        <div className={"ju-tab-nav"}>
                            <div className={'ju-tab-nav__title-wrapper'}>
                                <div className={' ju-tab-nav__title--selected'} id={this.state.isShow === 2?'ju-tab-nav__title':null} onClick={()=>{
                                    this.setState({
                                        isShow:2
                                    })
                                    this.props.getPriorBuyList(2)
                                }}>
                                    即将开始
                                </div>
                            </div>
                            <div className={'ju-tab-nav__title-wrapper'}>
                                <div className={' ju-tab-nav__title--selected'} id={this.state.isShow === 1?'ju-tab-nav__title':null} onClick={()=>{
                                    this.setState({
                                        isShow:1
                                    })
                                    this.props.getPriorBuyList(1)
                                }}>
                                    正在抢票
                                </div>
                            </div>
                            
                        </div>
                        <div className={"ju-tab"}>
                            {
                                data.map((v,i)=>{
                                    return (
                                        <div key={i} className={"prior-buy-card"} onClick={()=>{this.props.history.push('/ticket/'+v.schedular_id)}}>
                                            <div className={'item prior-buy-card__base'}>
                                                <img src={v.pic} alt='' />
                                                <div className={'item__info'}>
                                                    <div className={"item__info__date-week"}>
                                                        <span className={'item__info__date-week__date'}>{v.date}</span>
                                                        <span className={'item__info__date-week__week'}>{v.week}</span>
                                                    </div>
                                                    <div className={"item__info__name"}>{v.schedular_name}</div>
                                                    <div className={"item__info__place"}>{v.city_name +' | '+ v.venue_name}</div>
                                                </div>
                                            </div>
                                            <div className={'prior-buy-card__extra-wrapper'}>
                                                <span className={"prior-buy-card__extra__price"}>{v.min_price}</span>
                                                <span className={"prior-buy-card__extra__price-desc"}>起</span>
                                                <span className={"prior-buy-card__extra__date"}>{v.end_time}</span>
                                                <span className={"prior-buy-card__extra__time-desc"}>开始</span>
                                            </div>
                                            <div className={'divider'}>

                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PriorBuy 