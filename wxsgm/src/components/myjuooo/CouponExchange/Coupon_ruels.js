import React from "react"
// import {Link} from "react-router-dom"
import { Modal, Button } from 'antd';

export default class CouponRuels extends React.Component {
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    // handleOk = e => {
    //     console.log(e);
    //     this.setState({
    //         visible: false,
    //     });
    // };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <Button  onClick={this.showModal} style={{border:"1px solid transparent",background:"#f5f5f5",outline: "none",
                    backgroundColor: "transparent"}}>
                    优惠券规则说明
                </Button>
                <Modal
                    title="活动规则"
                    visible={this.state.visible}
                    okButtonProps={null}
                    onCancel={this.handleCancel}
                    width={"6rem"}
                    style={{position:"absolute",top:"3rem",left:"10%"}}
                    footer={null}
                    okText={"确定"}
                >
                    <div className={"coupon_ruels_style"}>
                        <p>1、单笔订单只能使用1张优惠券，不能同时使用多张优惠券；</p>
                        <p>2、请在有效期内使用优惠券，未使用的优惠券过期后，将自动作废；</p>
                        <p>3、每张优惠券的使用条件请查看对应优惠券的使用说明；</p>
                        <p>4、部分特殊演出不适用平台发放的所有优惠券，具体以付款结算为准；</p>
                        <p>5、用户使用优惠券下订单，无论是否支付优惠券将不予退回；</p>
                        <p>6、优惠券仅能在聚橙网提交订单时抵减应支付商品金额，不能进行兑现或其他用；</p>
                        <p>7、使用优惠券时，优惠券与平台其他优惠不能同时享有，优惠券支付部分不开具发票</p>
                        <p>8、优惠券严禁出售或转让，如经发现并证实的，该券将予以作废处理；</p>
                        <p>9、如果在聚橙网使用通过不正当手段获得的优惠劵，聚橙网有权将该券予以作废处理，并要求此客户通过其它方式补足余款。</p>
                        <p>10、聚橙网对优惠券使用条件享有最终解释权</p>
                        <p>11、如需了解更多，请联系在线客服或拨打客服电话400-185-8666。</p>
                    </div>

                </Modal>
            </div>
        );
    }
}
