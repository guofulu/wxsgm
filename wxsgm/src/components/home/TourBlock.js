import React from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import '../../assets/scss/home/tourBlock.scss'
import {
    NavLink
} from 'react-router-dom';

class TourBlock extends React.Component{

    render(){
        //console.log(6969696,this.props)
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
                    <div className="swiper-container tour-swiper_list">
                        <div className="swiper-wrapper tour-swiper-wrapper">
                                {
                                    data.map((v,i)=>{
                                        return (
                                            <div key={i} className="swiper-slide tour-swiper-slide ">
                                                <NavLink to={'null'} className={'tour-block__list__wrap'}>
                                                    <div className={'tour-block__list__wrap__item '}>
                                                        <img style={{width:'4.9rem',height:'2.8rem'}} src={v.pic} alt='' />
                                                    </div>
                                                    <h3 className={'tour-block__list__wrap__title text-single'}>
                                                        {
                                                            v.show_name
                                                        }
                                                    </h3>
                                                    <p className={'tour-block__list__wrap__num'}>
                                                        {
                                                            v.schedular_num+'场巡演'
                                                        }
                                                    </p>

                                                </NavLink>
                                            </div>

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
        
        var swiper = new Swiper('.tour-swiper_list', {
            slidesPerView : "auto",
          spaceBetween: 30,
          centeredSlides: false,
          loop: true,
          slideActiveClass:'.tour-swiper-slide-active'
          
        });
    }
}
export default TourBlock






