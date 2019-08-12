import React  from "react"
import {Link,NavLink} from "react-router-dom"
import Popover from "../../components/public/Popover";
import axios from  "axios"
class  Discount extends React.Component{
    constructor(){
        super();
        this.state={
            Show_category_list:[],
            list:[]
        }
    }
    render(){
        return(
            <div className={"discount"}>
                <div  className={"navbar_on_center"} style={{zIndex:'88'}}>
                    <div className={"My_left"} onClick={()=>{this.props.history.go(-1)}}>&lt;</div>
                    <div className = {"My_center"}>
                        专享优惠
                    </div>
                    <Popover className={"My_rigth"}></Popover>
                </div>
                <div className={"showNav"}>
                    <div className={"showNull"}></div>
                    <ul style={{marginTop:".4rem"}} className={"showUl"}>
                        <li  onClick={this.getVipDiscount.bind(this,0)}>全部</li>
                        {
                            this.state.Show_category_list.map((v,i)=>{
                                return(
                                    <li key={i} onClick={this.getVipDiscount.bind(this,v.category_id/1)}>{v.name}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div style={{height:"100px"}}></div>
                {
                    this.state.list.map((v,i)=>{
                        return(
                            <ul  className={"library_main"} key={i}>
                                <Link  to={"/ticket/"+v.schedular_id/1}>
                                    <li className={"library_li"}>
                                        <div className={"library_left"}>
                                            <img src={v.pic} alt=""/>
                                        </div>
                                        <div className={"library_right"}>
                                            <p className={"library_time"}>{v.date}{v.week}</p>
                                            <p className={"library_time"}>{v.schedular_name}</p>
                                            <p className={"library_name"}  to={"/ticket/"+v.schedular_id/1}>{v.name}</p>
                                            <p className={"venue_name"}>{v.city_name}   |    {v.venue_name}</p>
                                            <p className={"tag_icon"}>￥{v.max_price} <span style={{marginLeft:"163px"}}>{v.min_discount}折</span></p>
                                        </div>
                                    </li>
                                </Link>
                            </ul>
                        )
                    })
                }


            </div>
        )
    }
    getVipDiscount(type,e){
        console.log(e)
        axios.get("/juoooAPI/vip/index/getDiscountList?page=1&city_id=0&cate_id="+type/1+"&discount_id=0&version=6.0.3&referer=2")
            .then(data=>{
                console.log(data.data.list)
                this.setState({
                    list:data.data.list
                })
            })
    }
    componentDidMount() {
        axios.get("/juoooM/Search/getShowCategory?version=6.0.1&referer=2")
            .then(data=>{
                console.log(data.data.show_category_list);

                this.setState({
                    Show_category_list:data.data.show_category_list
                })
            })
        this.getVipDiscount.call(this,0)

    }
}
export default Discount