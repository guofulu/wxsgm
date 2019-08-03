import React from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import '../../assets/scss/home/hotBlock.scss'
import {
    NavLink
} from 'react-router-dom'

class HotBlock extends React.Component{

    render(){
        const data = this.props.hots_show_list.slice(0,6)
        return (
            <section className={'hot-block'}>
                <div className={'hot-block__lab'}>
                    <h3>热门演出</h3>
                    <NavLink to={'/null'} className={'hot-block__lab-a'}>
                        <img src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg=='} alt={''} />
                    </NavLink>
                </div> 
                <div className={'hot-block__list hot-list'}>
                    <div className="swiper-container hot-block-swiper">
                        <div className="swiper-wrapper swiper-wrapper-div">
                            {
                                data.map((v,i)=>{
                                    return (
                                        <NavLink key={i} className="swiper-slide swiper-slide-link" to={'/null'}>
                                            <img src={v.pic} alt={''} />
                                            <h3>{v.show_name}</h3>
                                        </NavLink>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                </div> 
            </section>
        )
    }
    componentDidUpdate(){
        var mySwiper = new Swiper('.hot-block-swiper',{
            slidesPerView : 3,
            centeredSlides : false,
            })
    }
}
export default HotBlock