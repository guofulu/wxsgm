import { Drawer, Button, Radio } from 'antd';
import React from "react"
import "../../assets/css/ticket.css"
import 'antd/dist/antd.css'
const RadioGroup = Radio.Group;
class Erject extends React.Component {
    state = { visible: false, placement: 'bottom' };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        return (
            <div>
                <div className={"detail__tips"}  onClick={this.showDrawer}>
                        <div className={"tips__title"}>
                            <h1>温馨提示</h1>
                            <p style={{marginTop:"-.15rem"}}><i className={"iconfont icon-xiangyou"}></i></p>
                        </div>
                        <ul className={"tips__list"}>
                            <li>· 快递说明</li>
                            <li>· 订单说明</li>
                            <li>· 确认订单</li>
                            <li>· 购物提醒</li>
                        </ul>

                    </div>
                <Drawer
                    height={"550px"}
                    title="温馨提示"
                    placement={this.state.placement}
                    closable={true}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <div>
                        <p>· 快递说明</p>
                        <p>为避免快递配送不能及时到达，距演出开场时间少于3天不提供快递服务，您可以选择电子票或者在线支付后上门自取纸质票。（主办演出可在演出现场取票）。</p>
                        <p>· 订票说明</p>
                        <p>网上订购请提前选择您意欲购买的演出和票品价位，根据流程提示完成订票。</p>
                        <p>· 确定订单</p>
                        <p>成功下单后，我们将短信与你确认订单信息，如有任何疑问，请致电我们的客服热线：400-185-8666，客服人员将第一时间为您服务。</p>
                        <p>· 购票提醒</p>
                        <p>因票品的特殊性，一经订购，不退不换，请订票前务必确认购买意向。</p>
                    </div>
                </Drawer>
            </div>
        );
    }
}
export default Erject