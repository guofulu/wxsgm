import React from "react"
import {Link} from "react-router-dom"
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
    render() {
        return(
            <div className={"car_warp"}>
                <div className={"navbar_on_center"}>
                    <Link className={"My_left"} to={"/"}>&lt;</Link>
                    <div className = {"My_center"}>
                        欢聚橙卡
                    </div>
                    <Popover></Popover>
                </div>
                {/*<CarMine></CarMine>*/}
                {
                    this.props.MyCarMarketList.data?<CarMarket {...this.props}></CarMarket>:null
                }

                <div className={"car_footer"}>
                    <div className={"car_tab"}>
                        <div className={"car_tab_left car_tab_have"}>购买新卡</div>
                        <div>|</div>
                        <CarBind>绑定新卡</CarBind>
                        <div>|</div>
                        <div className={"car_tab_right car_tab_have"}>我的卡包</div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        console.log(21321312,this.props)
        this.props.getMycarList()
    }
}
export default connect((state)=>({
        MyCarMarketList:state.myjucooo.MyCarMarketList
    }),
    (dispatch)=>bindActionCreators(myjucoooCreator,dispatch))(Cardproduct)