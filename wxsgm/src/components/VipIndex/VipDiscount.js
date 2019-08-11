import React from 'react';
import '../../assets/scss/vipIndex/vipDiscount.scss';

class VipDiscount extends React.Component{

    render(){
        
        
        return (
            <div className={'entry-block vip-plus__discount'}>
                <div className={"entry-block__title"}>
                    专享折扣
                    <span className={"entry-block__title__desc"}></span>
                </div>
                <div className={"vip-plus-discount-grid"}>
                    <div className={"vip-plus-discount-grid__row"}>
                        {
                            this.props.DiscountList.list.slice(0,3).map((v,i)=>{
                                return (
                                    <div key={i} className={'vip-plus-discount-show-cell'} onClick={()=>{this.props.history.push('/ticket/'+v.schedular_id)}}>
                                        <div className={'show-cell'}>
                                            <img src={v.pic} alt='' />
                                            <div className={'show-cell__name'}>{v.schedular_name}</div>
                                        </div>
                                        <div className={'vip-plus-discount-show-cell__discount'}>
                                            <span className={"vip-plus-discount-show-cell__discount__num"}>{v.min_discount}</span>
                                            <span className={"vip-plus-discount-show-cell__discount__desc"}>折起</span>
                                        </div>
                                    </div>

                                )
                            })
                        }
                        
                    </div>
                    <div className={"vip-plus-discount-grid__row"}>
                        {
                            this.props.DiscountList.list.slice(0,3).map((v,i)=>{
                                return (
                                    <div key={i} className={'vip-plus-discount-show-cell'}>
                                        <div className={'show-cell'}>
                                            <img src={v.pic} alt='' />
                                            <div className={'show-cell__name'}>{v.schedular_name}</div>
                                        </div>
                                        <div className={'vip-plus-discount-show-cell__discount'}>
                                            <span className={"vip-plus-discount-show-cell__discount__num"}>{v.min_discount}</span>
                                            <span className={"vip-plus-discount-show-cell__discount__desc"}>折起</span>
                                        </div>
                                    </div>

                                )
                            })
                        }
                        
                    </div>
                    <div className={"vip-plus-discount-grid__row"}>
                        {
                            this.props.DiscountList.list.slice(0,3).map((v,i)=>{
                                return (
                                    <div key={i} className={'vip-plus-discount-show-cell'}>
                                        <div className={'show-cell'}>
                                            <img src={v.pic} alt='' />
                                            <div className={'show-cell__name'}>{v.schedular_name}</div>
                                        </div>
                                        <div className={'vip-plus-discount-show-cell__discount'}>
                                            <span className={"vip-plus-discount-show-cell__discount__num"}>{v.min_discount}</span>
                                            <span className={"vip-plus-discount-show-cell__discount__desc"}>折起</span>
                                        </div>
                                    </div>

                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default VipDiscount 