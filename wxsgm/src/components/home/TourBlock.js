import React from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import '../../assets/scss/home/hotBlock.scss'
import {
    NavLink
} from 'react-router-dom';

class TourBlock extends React.Component{

    render(){
        const data = this.props.tour_show_list.slice(0,6) || []
        return (
            <section className={'hot-block'}>
                <div className={'hot-block__lab'}>
                    <h3>巡回演出</h3>
                    <NavLink to={'/null'} className={'hot-block__lab-a'}>
                        <img src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg=='} alt={''} />
                    </NavLink>
                </div> 
                <div className={'tour-block tour-wrap'}>
                    <div className="swiper-container tour-block-swiper">
                        <div className="swiper-wrapper swiper-wrapperdiv">
                            {
                                data.map((v,i)=>{
                                    return (
                                        <NavLink key={i} className="swiper-slide swiper-slidelink" to={'/null'}>
                                            <img style={{height:'2rem',width:'100%'}} src={v.pic} alt={''} />
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
        var mySwiper = new Swiper ('.tour-block-swiper', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项


          })  
    }
}
export default TourBlock