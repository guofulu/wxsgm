import React from "react"
import Swiper from "swiper"
import {Link,withRouter} from "react-router-dom"
import "swiper/dist/css/swiper.min.css"
class Horizontal extends React.Component{
    render() {
        return (
            <div style={{width:"100%", height:"210px"}} className="swiper-container">
                <div style={{width:"100%"}} className="swiper-wrapper">

                        {
                            this.props.show_list.map((v,i)=>{
                                return (
                                    <div key={i}  style={{height:"4.2rem"}} className="swiper-slide">

                                        <p style={{ width:"1.3rem",textAlign:"center",margin:"0 auto",color:"#6666",fontSize:".28rem",}}>{v.show_time}</p>
                                        <div style={{width:"100%",height:"0.02rem", background:"#6666",marginTop:".2rem"}}></div>
                                        <p style={{width:".2rem",height:".2rem",background:"#ccc", borderRadius:"50%", position:"absolute",top: ".51rem",
                                            left: "1.06rem"}}></p>

                                        <img onClick={()=>{
                                            this.props.history.push("/ticket/"+v.id)
                                        }} style={{width:"2rem",height:"3rem",margin:".3rem",}} src={v.pic}/>

                                    </div>
                                )
                            })}
                    <div   style={{height:"4.2rem"}} className="swiper-slide">

                        <p style={{ width:"1.3rem",textAlign:"center",margin:"0 auto",color:"#fff",fontSize:".28rem",}}>8月31日</p>
                        <div style={{width:"100%",height:"0.02rem", background:"#6666",marginTop:".2rem"}}></div>
                        <p style={{width:".2rem",height:".2rem",background:"#ccc", borderRadius:"50%", position:"absolute",top: ".51rem",
                            left: "1.06rem"}}></p>
                        <div style={{width:"2rem",height:"3rem",margin:".3rem",background:"#f5f5f5",float:"left"}}>
                            <p style={{width:"1.85rem",color:"#66666",textAlign:"center",marginTop:"1.2rem",fontSize: ".27rem"}} onClick={()=>{
                                this.props.history.push('/theatre/showList')
                            }}>查看更多></p>
                        </div>

                    </div>


                </div>
            </div>
        )
    }
    componentDidMount() {
        var mySwiper = new Swiper('.swiper-container',{
            // direction: 'vertical',
            slidesPerView : 3,
            centeredSlides : false,
        })
    }
}
export default withRouter( Horizontal)