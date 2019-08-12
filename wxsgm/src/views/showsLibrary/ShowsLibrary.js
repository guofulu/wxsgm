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
            isPage : 1,
            isMore : 1
        })
    }
    componentWillMount(){
        window.addEventListener('scroll',()=>{
            //console.log(919191,window.scrollY,this.refs.showsLibrary.offsetHeight)
            this.moreRecommendBlock.call(this)
        })
    }
    moreRecommendBlock(){
        console.log(window.scrollY)
        if(typeof(this.refs.showsLibrary) !== 'undefined'){
            let juli = this.refs.showsLibrary.offsetHeight - window.scrollY;
            console.log(666,juli)
            if(juli < 800){
                if(this.state.isMore){
                    // console.log(77,"进来了",this.state.isMore)
                    this.state.isMore = 0
                    this.props.getShowList({page:++this.state.isPage});
                }
            }
        }
    }
    componentDidUpdate(){
        this.state.isMore = 1;
        // console.log('回来了',this.state.isMore)

    }
    render() {
        return(
                <div className={"showsLibrary"} ref={"showsLibrary"}>
                    <div className={"showsLibrary_warp_top"}>
                        <div className={"My_null"} ref={""}></div>
                        <Showtop {...this.props}></Showtop>
                        <ShowNav {...this.props}></ShowNav>
                    </div>
                    <div className={"library_wrap js_show_library"} >
                        {
                        this.props.Shows_type_wrap?<UpShowsTypeWrap {...this.props}></UpShowsTypeWrap>  :null
                        }
                    </div>
                    {/*<UpShowsLibrary></UpShowsLibrary>*/}
                </div>
        )
    }

    componentDidMount() {
        // console.log(23423425232232,this.props.getShowsList())
        this.props.getShowCategory()
        this.props.getShowList.call(this,{type:this.props.match.params.category})
    }
}
export default connect((state)=>({
        Show_category_list:state.showsLibrary.Show_category_list,
        Shows_type_wrap:state.showsLibrary.Shows_type_wrap
}),(dispatch)=>
    bindActionCreators(showsLibraryCreator,dispatch))(ShowsLibrary)