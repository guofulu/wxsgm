//演出的页面
import React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import showsLibraryCreator from "../../store/actionCreator/showsLibrary"
import "../../assets/css/My/MyshowsLibrary.css"
import Showtop from "../../components/showsLibrary/showsTop"
import ShowNav from "../../components/showsLibrary/showsNav"
// import UpShowsLibrary from "../../components/showsLibrary/UpShowsLibrary"
import UpShowsTypeWrap from "../../components/showsLibrary/UpShowsTypeWrap"

class ShowsLibrary extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            isData : true
        })
    }
    render() {
        // console.log(123456789,window.)
        return(
                <div >
                    <div className={"My_null"}></div>
                    <Showtop {...this.props}></Showtop>
                    <ShowNav {...this.props}></ShowNav>
                    <div className={"library_wrap js_show_library"} >
                        <UpShowsTypeWrap {...this.props}></UpShowsTypeWrap>
                    </div>
                </div>
        )
    }
    componentDidMount() {

        // console.log(222,"componentDidMount")
        // this.props.getShowsList()
        // this.props.getShowCategory()
        // this.props.getShowList.call(this, 0)

        console.log(23423425232232,this.props.match)
        this.props.getShowsList()
        this.props.getShowCategory()
        this.props.getShowList.call(this,this.props.match.params.category)

    }
}
export default connect((state)=>({
        ShowsLibrary:state.showsLibrary.ShowsLibrary,
        Show_category_list:state.showsLibrary.Show_category_list,
        Shows_type_wrap:state.showsLibrary.Shows_type_wrap
}),(dispatch)=>
    bindActionCreators(showsLibraryCreator,dispatch))(ShowsLibrary)