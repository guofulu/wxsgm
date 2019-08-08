import React from "react"
import "../../assets/css/feedback.css"
class Feedback extends React.Component{
    render() {
        return (
            <div className={"feedback"}>
                <header className={"navbar"}>
                    <div className={"navbar-inner"}>
                        <div className={"left"}>
                            <i onClick={()=>{
                                this.props.history.go(-1)
                            }} className={"iconfont icon-zuojiantou"}></i>
                        </div>
                        <div className={"navbar_center"}>意见反馈</div>
                    </div>
                </header>
                <div className={"txt"}>
                    <textarea name="" id="textarea" style={{border:"none"}} cols="30" rows="10" placeholder=" 请输入您的问题或建议，我们将不断改进" maxLength="200"></textarea>
                    <div className="num"><span className="nul js-num">0</span>/<span className="zoom">200</span></div>
                </div>
                <div className="tel-wrap">
                    <input id="tel-num" type="text"  placeholder=" * 请输入有效手机号码"/>
                </div>
                <div className="select-city" onClick={()=>{
                    this.props.history.push("/feedback/citySelect")
                }}>
                    <span className="fl">*选择你所在的城市</span>
                    <div className="fr">
                        <i className="iconfont  icon-dingwei"></i>
                        <span className="city fl"></span>
                    </div>
                </div>
                <div className="btn-wrap">
                    <button className="border-ccc">提交</button>
                </div>
            </div>
        );
    }
}
export default Feedback