import React from "react"
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"
class Horizontal extends React.Component{
    render() {
        console.log(11111)
        return (
            <div style={{width:"100%"}} className="swiper-container">
                <div style={{width:"100%"}} className="swiper-wrapper">
                    <div style={{height:"210px"}} className="swiper-slide">
                        {/*{*/}
                            {/*this.props.TheatreList.show_list.map((v,i)=>{*/}
                                {/*return (*/}
                                    {/*<div>*/}
                                        {/*<img src={v.pic}/>*/}
                                    {/*</div>*/}
                                {/*)*/}
                            {/*})*/}
                        {/*}*/}
                    </div>

                </div>
            </div>
        )
    }
    componentDidMount() {
        console.log(2222,this.props.TheatreList.show_list)
        var mySwiper = new Swiper('.swiper-container',{
            slidesPerView : 3,
            centeredSlides : true,
        })
    }
}
export default Horizontal