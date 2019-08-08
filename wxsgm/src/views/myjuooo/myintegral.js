// 积分商城
import React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import MyintegralZJ from "../../components/myjuooo/Myintegral/Myintegral"
import myjucoooCreator from "../../store/actionCreator/myjucooo"


class Myintegral extends React.Component{
    render() {
        return(
            <div className={"myintegral"}>
                <MyintegralZJ {...this.props}></MyintegralZJ>
            </div>
        )
    }
    componentDidMount(prevProps, prevState, snapshot) {
        this.props.getMyintegralList()
    }
}

export default connect((state)=>({
    MyintegralList:state.home.RegisterCoupon,
}),(dispatch)=>
    bindActionCreators(myjucoooCreator,dispatch))(Myintegral)