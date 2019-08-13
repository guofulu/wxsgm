import React from "react"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Popover from "../../components/public/Popover";
import homeCreator from "../../store/actionCreator/home";
import RecommendBlock from "../../components/home/RecommendBlock";
class Scores extends React.Component{
    render() {
        console.log(this.props)
        return(
            <div style={{width:"100%",height:"100%"}}>
                <div  className={"navbar_on_center"} style={{zIndex:'88',height:"1.20rem"}}>

                    <div className={"My_left"} onClick={()=>{this.props.history.go(-1)}}>&lt;</div>
                    <div className = {"My_center"}>
                      积分商城
                    </div>
                    <Popover className={"My_rigth"}></Popover>
                </div>
                <div style={{wdith:"100%",height:"60px"}}></div>
                <div className={"My_price"}>
                    <p className={"My_price_rules"}>积分规则</p>
                    <p className={"My_price_top"}>可用积分</p>
                    <p className={"My_price_bot"}>999999.00</p>
                </div>
                {
                    this.props.RecommendShow.recommend_show_list?<RecommendBlock RecommendShow={this.props.RecommendShow}></RecommendBlock>:null
                }
            </div>
        )
    }
    componentDidMount() {
        this.props.getRecommendShow()
    }

}


export default connect((state)=>({

    RecommendShow:state.home.RecommendShow,

}),(dispatch)=>bindActionCreators(homeCreator,dispatch))(Scores)