import React from "react"

import CouponOverdue from "../../components/myjuooo/CouponExchange/Coupon_overdue"

export default class CouponOld extends React.Component{
    render() {
        return(
            <div>
                <CouponOverdue {...this.props}></CouponOverdue>
            </div>
        )
    }
}