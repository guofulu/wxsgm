import React from "react"
import "../../assets/css/home/hotvenue.css"
import {NavLink} from "react-router-dom"
import  "swiper/dist/css/swiper.min.css"
import Swiper from 'swiper';
export default class HotVenue extends React.Component{
    componentDidMount(prevProps, prevState, snapshot) {
            var mySwiper = new Swiper ('.hot_venue_swiper', {
                direction: 'horizontal',
                loop: false,
                setWrapperSize :true,
                slidesPerView : "auto",
        })
        console.log(666666666666,this.props.HotTheatre)
    }
    render() {
        return(
            <div className={'hot_venue'}>
                <div className={"hot_venue__wrap"}>
                    <h3 className={"hot_venue__h3"}>热门场馆</h3>
                    <NavLink to={'/show/showsLibrary'} className={'hot_block__lab_a'}>
                        <img src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg=='} alt={''} />
                    </NavLink>
                </div>
                <div className={"hot_venue__block"}>
                    <div className="swiper-container hot_venue_swiper">
                        <div className="swiper-wrapper hot_venue_swiper_two">
                            {
                                this.props.HotTheatre.theatre_list.map((v, i) => {
                                    return (
                                        <div className="swiper-slide swiper_slide_active_hotvenue"key={i}>
                                            <div className={"hot_venue_block_info"}>
                                                <NavLink className={"hot_venue_swiper_top_img"} to={"/show/showsLibrary"}>
                                                    <img src={v.pic} alt="" to={"/show/showsLibrary"}　/>
                                                </NavLink>
                                                <div className={"hot_center"}>
                                                    <h3 className={"hot_venue_swiper_top_h"}>{v.name}</h3>
                                                    <b className={"hot_venue_swiper_top_b"}>{v.count}场在售演出</b>
                                                </div>
                                                <NavLink className={"hot_venue_swiper_top_i"} to={"/show/showsLibrary"}　>...</NavLink>
                                            </div>
                                            <div className={"hot_venue_botton"} key={i}>
                                            {
                                               v.showList.map((o,i)=>{
                                                    return(
                                                        <div key={i}>
                                                            <p>{o.show_time}</p>
                                                            <p className={"hot_venue_botton_p"}>
                                                                <NavLink to={"/show/showsLibrary"} className={"hot_venue_botton_nav"}><img src={o.pic} alt=""/></NavLink>
                                                            </p>
                                                        </div>
                                                    )
                                                })
                                            }
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
