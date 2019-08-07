import React from "react"
import "../../assets/css/search.css"
import {connect} from "react-redux"
import searchCreator from "../../store/actionCreator/search";
import {bindActionCreators} from "redux"
class Search extends React.Component{
    render() {
        return(
            <div className={"page"}>
                <div className={"search"}>
                    <div className={"search-ipt"}>
                        <div style={{marginTop:"5px"}} ><i style={{fontSize:"18px",textAlign:"center", }} className={"iconfont icon-sousuo"}></i></div>
                        <input className={"search_text"} type={"search"} placeholder={"搜索热门演出"}/>
                        <div><i style={{fontSize:"16px",textAlign:"center",marginRight:"10px" }} className={"iconfont icon-guanbi1"}></i></div>
                    </div>
                    <div className={"cancel"}>取消</div>
                </div>
                <div className={"hot-search"}>
                    <h3>热门搜索</h3>
                    <ul className={"list"}>
                {
                    this.props.SearchList.map((v,i)=>{
                        return(

                                <li>{v}</li>

                        )
                    })
                }
                    </ul>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getSearchList()
    }
}
export default  connect((state)=>({
    SearchList:state.search.SearchList,
}),(dispatch)=>bindActionCreators(searchCreator,dispatch))(Search)