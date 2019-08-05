import React from "react"
import "../../assets/css/ticket.css"
import axios from "axios"
class Ticket extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            data: {
                static_data:{
                    pic:'',
                    price_range:""

                },
                share_data:{
                    share_title:""
                },

            }
        }
    }
    render(){
        return(
         <div className={"betail"}>
             <div className={"brief"}>
              <img src={this.state.data.static_data.pic} alt={""}/>
             </div>
             <div className={"mask"}>
                 <div className={"text"} >
                     <p><i style={{fontSize:".44rem"}} className={'iconfont icon-zuojiantou'}></i></p>
                     <p >演出详情</p>
                     <p><i  style={{fontSize:".44rem"}} className={'iconfont icon-shouye3'}></i></p>
                 </div>
                 <div className={"brief__primary__fg__content"}>
                     <div className={"brief__primary__fg__pic"}>
                         <img src={this.state.data.static_data.pic} alt={""}/>
                     </div>
                     <div className={"brief__primary__fg__content__info"}>
                         <h3>{this.state.data.share_data.share_title}</h3>
                         <p>￥{this.state.data.static_data.price_range}</p>
                     </div>
                 </div>
             </div>
             <div className={"brief__secondary"}>
                 <div>
                     <h3>08/04-08/25</h3>
                     <p>深圳| 南上文体中心剧院小剧院</p>
                 </div>
                 <div>
                     <i className={"iconfont icon-dingwei1"}></i>
                 </div>
             </div>
         </div>
        )
    }
    componentDidMount() {
        axios.get("/juoooAPI/Schedule/Schedule/getScheduleInfo?schedular_id="+this.props.match.params.type+"&version=6.0.1&referer=2")
            .then(({data})=>{
                console.log(data.static_data.price_range)
                this.setState({
                    data:data
                })
                console.log(222,this.state.data)
            })
    }
}
export default Ticket