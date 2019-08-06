//我的信息部分
import React from "react"
import '../../assets/Myjuooo/font_i4j4jsyp2wo/iconfont.css'

import {
    Link
} from "react-router-dom"
export default class MyInfo extends React.Component{
    render() {
        return(
            <div>
            <div className={"mine_info"}>
                <Link className={"icon iconfont"} to={"/Myjuooo/mysecurity"}>&#xe618;</Link>

                <div className={"mine_info_main"}>
                    <div className={"mine_info__main__head"}>
                        <div className={"mine_info__main__head__pic"}>
                            <img src="https://image.juooo.com/group1/M00/03/6F/rAoKNV0XF2uABEtSAAANUrP00o0602.png" alt=""/>
                        </div>
                        <span className={"mine_info__main__head__name"}>17865769236</span>
                        <span className={"mine_info__main__head__uid"}>ID:12312</span>
                    </div>
                    <div className={"mine_info__main__label"}>
                        <p className={"mine_info__main__label__name"}>普通会员</p>
                    </div>
                    <div className={"mine_info__main__cnt"}>
                        <Link className={"mine_info__main__cnt__item"} to={"/Myjuooo/mymoney"}>
                            <p className={"mine_info__main__cnt__item__num"}>9999</p>
                            <p className={"mine_info__main__cnt__item__name"}>账户余额</p>
                            <div className={"separator"}></div>
                        </Link>
                        <Link className={"mine_info__main__cnt__item"} to={"/null"}>
                            <p className={"mine_info__main__cnt__item__num"}>9999</p>
                            <p className={"mine_info__main__cnt__item__name"}>积分</p>
                            <div className={"separator"}></div>
                        </Link>
                        <Link className={"mine_info__main__cnt__item"} to={"/null"}>
                            <p className={"mine_info__main__cnt__item__num"}>9999</p>
                            <p className={"mine_info__main__cnt__item__name"}>优惠券</p>
                            <div className={"separator"}></div>
                        </Link>
                        <Link className={"mine_info__main__cnt__item"} to={"/null"}>
                            <p className={"mine_info__main__cnt__item__num"} style={{color:"#666"}}>立即开通</p>
                            <p className={"mine_info__main__cnt__item__name"}>橙PLUS卡</p>
                            <div className={"separator"}></div>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}