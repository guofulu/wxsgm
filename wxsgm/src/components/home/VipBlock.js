import React from  'react';
import {
    NavLink
} from 'react-router-dom';
import '../../assets/scss/home/vipBlock.scss';

class VipBlock extends React.Component{

    render(){
        return (
            <div className={'vip-block'}>
                <NavLink className={'vip-block__advert'} to={'/null'}>
                    <div className={'vip-block__advert__left'}>
                        <span className={'vip-block__advert__left__logo'}></span>
                        <span className={'vip-block__advert__left__tip'}>VIP+会员尊享权益</span>
                    </div>
                    <div className={'vip-block__advert__right'}>
                        <span className={'vip-block__advert__right__lab'}>开通99元/年</span>
                        <span className={'icon'}>&gt;</span>
                    </div>
                </NavLink>
                <div className={'vip-block__conent'}>
                    <div className={'vip-block__conent__power'}>
                        <h3></h3>
                        <ul>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className={'vip-block__conent__power'}>

                    </div>
                </div>
            </div>
        )
    }
} 
export default VipBlock;
