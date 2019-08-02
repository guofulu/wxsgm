import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import homeCreator from '../../store/actionCreator/home';


class Home extends React.Component{
    componentDidMount(){
        this.props.getClassifyHome();
        
    }
    render(){

        return (
            <div>
                这是首页的组件
            </div>
        )
    }
}

export default connect((state)=>({
    RegisterCoupon:state.home.RegisterCoupon,
    ClassifyHome:state.home.ClassifyHome,
    HotsRecommendList:state.home.HotsRecommendList,
    FloorShow:state.home.FloorShow,
    RecommendShow:state.home.RecommendShow,
    VipHomeSchedular:state.home.VipHomeSchedular
}),(dispatch)=>bindActionCreators(homeCreator,dispatch))(Home)