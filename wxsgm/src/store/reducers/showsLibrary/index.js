import initState from "../../state/showsLibrary"
import showListYes from "../../actionType/showsLibrary"
import showsNav from "../../actionType/showsLibrary"
import showList from "../../actionType/showsLibrary"
export default function (state = initState,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === showListYes.UP_SHOWSLIBRARY){
        state.Shows_type_wrap = payload//更改全部
        // console.log(227777772,payload)
    }else if(type === showsNav.UP_SHOWNAV){
        state.Show_category_list = payload
    }else if(type === showList.UP_SHOWSLIST){//合并全部
        // console.log(333,state.Shows_type_wrap,payload)
        state.Shows_type_wrap = [...state.Shows_type_wrap,...payload]
        // console.log(999999,state.Shows_type_wrap )
    }
    return state
}