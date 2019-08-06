import React from "react"
import "../../assets/css/ticket.css"
import axios from "axios"
import {connect} from "react-redux"
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"
import {bindActionCreators} from 'redux'
import theaterCreator from "../../store/actionCreator/theatre";
import Erject from "../../components/theatre/erject"
class Ticket extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            data: {
                static_data:{
                    pic:'',
                    price_range:"",
                    show_desc:{
                        desc:""
                    },
                    city:{
                        city_name:''
                    },
                    venue:{
                        venue_name:""
                    },
                    show_id:36960
                },
                share_data:{
                    share_title:""
                },

            }
        }

    }
    render(){
        const str=this.state.data.static_data.show_desc.desc||{}
        return(
         <div className={"betail"}>
             <div className={"brief"}>
              <img src={this.state.data.static_data.pic} alt={""}/>
             </div>
             <div className={"mask"}>
                 <div className={"text"} >
                     <p><i style={{fontSize:".44rem"}} className={'iconfont icon-zuojiantou'}></i></p>
                     <p >演出详情</p>
                     <p><i  style={{fontSize:".34rem"}} className={'iconfont icon-shouye3'}></i></p>
                 </div>
                 <div className={"brief__primary__fg__content"}>
                     <div className={"brief__primary__fg__pic"}>
                         <img src={this.state.data.static_data.pic} alt={""}/>
                     </div>
                     <div className={"brief__primary__fg__content__info"}>
                         <h3>{this.state.data.share_data.share_title}</h3>
                         <p>{"￥"+this.state.data.static_data.price_range}</p>
                     </div>
                 </div>
             </div>
             <div className={"brief__secondary"}>
                 <div>
                     <h3>08/04-08/25</h3>
                     <p>{this.state.data.static_data.city.city_name}  | {this.state.data.static_data.venue.venue_name}</p>
                 </div>
                 <div className={"brief__secondary__pointer"}>
                     <i style={{display:"inline-block",fontSize:".46rem",textAlign:"center",marginRight:"1.8rem",color:"red"}} className={"iconfont icon-dingwei-copy"}></i>
                 </div>
             </div>
             <div className={"detail__plus-tips"}>
                 <div className={"orange-plus-tips"}>
                     <div className={"orange-plus-tips__name"}>橙PLUS卡  </div>
                     <div>开通送￥100 最高省675元</div>
                     <p style={{color:"#e6e6e6",marginTop:".2rem"}}>立即开卡</p>
                     <i style={{color:" #f5dea9",marginTop:".0.1rem",fontSize:".38rem"}} className={"iconfont icon-xiangyou"}></i>
                 </div>
             </div>
             <div className={"show-benefit-detail__schedule-discount"}>
                 <div>VIP+ &nbsp;:<p className={"plus__desc"}>V+会员享<span className={"plus__desc__benefit"}>国内免邮 + 双倍积分</span><span  style={{fontSize:".38rem"}} className={"iconfont icon-xiangyou plus__desc__arrow"}></span></p></div>
                 <div >入 场 &nbsp;:<p  className={"enter"}>凭短信入场</p></div>
                 <div style={{border:"none"}}>支持 &nbsp;:<p className={"support__list__item__text"}>电子票</p>|<p className={"support__list__item__right"}>同城满200包邮</p></div>
             </div>
             <div className={"tour-cities-detail__tour-cities"}>
                 <div className={"tour-cities__desc"}>
                     <h1>巡演城市</h1>
                     <p><span>{this.props.CityList.length===0?null:this.props.CityList.length}</span>场<i style={{fontSize:".38rem"}} className={"iconfont icon-xiangyou"}></i></p>
                     </div>
                 <div className={"tour-cities__list__content"}>
                     <div style={{width:"100%"}} className="swiper-container swiper__list__content">
                         <div style={{width:"100%"}} className="swiper-wrapper">
                             {
                                 this.props.CityList.map((v,i)=>{
                                     return (
                                         <div key={i} style={{width:"100px"}} className="swiper-slide ">
                                         <div className={"tour-cities__list__content__first-child"}>
                                             <div className={"list__content__item--actived"}>
                                                 <h3>{v.city_name}</h3>
                                                 <p>{v.show_time}</p>
                                             </div>
                                         </div>
                                         </div>
                                     )
                                 })
                             }


                         </div>

                     </div>

             </div>
         </div>
             <div className={"detail__intro"}>
                 <h1 className={"intro__title"}>演出介绍</h1>
                 {<div  className={"intro__content"} dangerouslySetInnerHTML={{__html: str}}>
                 </div>}
             </div>
             <div className="intro__mask" onClick={()=>{
                 document.querySelector(".detail__intro").style.height="84.30rem";
                 document.querySelector(".intro__mask").style.display="none";
             }} >展示全部</div>
             <Erject></Erject>
         </div>
        )
    }

    componentDidMount() {
        axios.get("/juoooAPI/Schedule/Schedule/getScheduleInfo?schedular_id="+this.props.match.params.type+"&version=6.0.1&referer=2")
            .then(({data})=>{
                console.log(data.static_data.cate_parent_id)
                this.setState({
                    data:data
                });
                this.props.getCityList.call(this,this.state.data.static_data.show_id)
                var mySwiper = new Swiper('.swiper__list__content',{
                    slidesPerView : 3,
                    centeredSlides : false,
                })
            })


    }

}
export default connect((state)=>({
    CityList:state.theatre.City,
}),(dispatch)=>bindActionCreators(theaterCreator,dispatch))(Ticket)