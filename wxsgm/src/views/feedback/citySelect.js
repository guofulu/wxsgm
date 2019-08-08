import  React from "react"
import  "../../assets/css/citySelect.css"
class CitySelect extends React.Component{
    render() {
        return(
            <div className={"CitySelect"}>
                <div className={"navbar-on-center"}>
                    <i onClick={()=>{
                        this.props.history.go(-1)
                    }} className={'iconfont icon-zuojiantou'}></i>
                    <p>选择您所在的城市</p>
                </div>
                <div className={"container"}>
                    <i className={"iconfont icon-sousuo"}></i>
                    <input placeholder={"搜索城市"}/>
                </div>
            </div>
        )
    }
}
export default CitySelect