import React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import Popover from "../../components/public/Popover";
import "../../assets/css/My/car/cardproduct.css"
import CarMine from "../../components/myjuooo/car/CarMine"
import CarBind from "../../components/myjuooo/car/CarBind"
import CarMarket from "../../components/myjuooo/car/CarMarket"
import myjucoooCreator from "../../store/actionCreator/myjucooo"
import myjucooo from "../../store/reducers/myjucooo";

class Cardproduct extends React.Component{
    constructor(props) {
        super(props)
        this.state=({
            isShow : 1
        })
    }

    render() {
        console.log(666666,this.props)
        return(
            <div className={"car_warp"}>
                <div className={"navbar_on_center"} style={{zIndex:"100000"}}>
                    <div className={"My_left"} onClick={()=>{this.props.history.go(-1)}}>&lt;</div>
                    <div className = {"My_center"}>
                        欢聚橙卡
                    </div>
                    <Popover></Popover>
                </div>
                <div>
                    {
                       this.state.isShow === 0 && this.props.MyCarMarketList.data?<CarMarket{...this.props}></CarMarket>:null
                    }
                </div>
                <div>
                    {this.state.isShow === 1? <CarMine></CarMine> : null}
                </div>
                <div className={"car_footer"}>
                    <div className={"car_tab"}>
                        <div className={"car_tab_left car_tab_have"} pass="{this.state.isShow === 0}" onClick={()=>{
                            this.setState({
                                isShow :0
                            })
                        }}>购买新卡</div>
                        <div>|</div>
                        <CarBind>绑定新卡</CarBind>
                        <div>|</div>
                        <div className={"car_tab_right car_tab_have"} pass="{this.state.isShow === 1}" onClick={()=>{
                            this.setState({
                                isShow :1
                            })
                        }}>我的卡包</div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getMycards()
        this.props.getMycarList()
    }
}
export default connect((state)=>({
        MyCarMarketList:state.myjucooo.MyCarMarketList,
        MyCardsList : state.myjucooo.MyCardsList
    }),
    (dispatch)=>bindActionCreators(myjucoooCreator,dispatch))(Cardproduct)