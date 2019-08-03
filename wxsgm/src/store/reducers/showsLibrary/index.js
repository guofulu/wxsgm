import initState from "../../state/showsLibrary"
import showsLibrary from "../../actionType/showsLibrary"
import showsNav from "../../actionType/showsLibrary"
import showList from "../../actionType/showsLibrary"
export default function (state = initState,{type,payload}) {

    state = JSON.parse(JSON.stringify(state));
    if(type === showsLibrary.UP_SHOWSLIBRARY){
        state.ShowsLibrary = payload//将获取的数据赋值
        // console.log(222,payload)
    }else if(type === showsNav.UP_SHOWNAV){
        state.Show_category_list = payload
    }else if(type === showList.UP_SHOWSLIST){
        state.Shows_type_wrap = payload
        // console.log(999999,payload)
    }
    return state
}