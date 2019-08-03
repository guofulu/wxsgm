//演出的页面
import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import {bindActionCreators} from "redux"
import showsLibraryCreator from "../../store/actionCreator/showsLibrary"
import "../../assets/css/My/MyshowsLibrary.css"
import Showtop from "../../components/showsLibrary/showsTop"
import ShowNav from "../../components/showsLibrary/showsNav"
import UpShowsLibrary from "../../components/showsLibrary/UpShowsLibrary"
import UpShowsTypeWrap from "../../components/showsLibrary/UpShowsTypeWrap"

class ShowsLibrary extends React.Component{
    render() {
        return(
                <div>
                    <Showtop {...this.props}></Showtop>
                    <ShowNav {...this.props}></ShowNav>
                    <div className={"library_wrap js_show_library"} >
                        {
                            this.props.ShowsLibrary.category_id/1===0?<UpShowsLibrary {...this.props}></UpShowsLibrary>: <UpShowsTypeWrap {...this.props}></UpShowsTypeWrap>
                        }
                    </div>
                </div>
        )
    }

    componentDidMount() {
        this.props.getShowsList()
        this.props.getShowCategory()
        this.props.getShowList.bind(this,this.props.Shows_type_wrap.category_id)
    }

}
export default connect((state)=>({
        ShowsLibrary:state.showsLibrary.ShowsLibrary,
        Show_category_list:state.showsLibrary.Show_category_list,
        Shows_type_wrap:state.showsLibrary.Shows_type_wrap
}),(dispatch)=>
    bindActionCreators(showsLibraryCreator,dispatch))(ShowsLibrary)