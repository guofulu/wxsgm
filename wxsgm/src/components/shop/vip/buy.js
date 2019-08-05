import React from 'react'
import '../../../assets/css/BuyVip.css'
import {Link} from 'react-router-dom'
import BuyListBox from './buyList'
export default class Buy extends React.Component{
    render(){
        return(
            <div className={"buy_vip"}>
                <div className={"buy_vip_head"}>
                    <Link to={'/myjuooo/myjuooo'}><span  className="iconfont">&#xeb99;</span></Link>
                    <h3>开通VIP+会员</h3>
                </div>
                <div className={'buy_vip_nav'}>
                    <div className={'buy_vip_nav_bg'}>
                        <div className={'buy_vip_context'}>
                            <h3>VIP+尊享10大权益</h3>
                            <BuyListBox></BuyListBox>
                            <div className={'buy_vip_price'}>
                                <div className={'buy_vip_year'}>
                                    <h4>VIP+会员</h4>
                                    <span>年</span>
                                </div>
                                <div className={'buy_vip_money'}>￥99</div>
                            </div>
                            <div className={'buy_vip_period'}>
                                <p>有效期1年</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={'buy_vip_site'}>
                    <h3>观演城市</h3>
                    <div className={'Select_city'} onClick={()=>{
                        alert("出来了")
                    }}>
                        <h4>请选择城市<span className="iconfont">&#xe643;</span></h4>
                    </div>
                </div>
            </div>

        )
    }
}

