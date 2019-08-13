import React from "react"
import { Drawer, Button, Radio } from 'antd';
import "../../../assets/css/My/car/carBind.css"

const RadioGroup = Radio.Group;


export default class CarBind extends React.Component {
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

    onChange = e => {
        this.setState({
            placement: e.target.value,
        });
    };

    render() {
        return (
            <div>
                <RadioGroup
                    style={{ marginRight: 8 }}
                    defaultValue={this.state.placement}
                    onChange={this.onChange}
                >
                </RadioGroup>
                <span  onClick={this.showDrawer} style={{fontSize:"0.3rem", padding:"0 0.55rem"}}>
                    绑定新卡
                </span>
                <Drawer
                    title="绑定欢聚橙卡"
                    placement={this.state.placement}
                    closable={true}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    height={"7rem"}
                >
                    <p className={"carbind_input"}>卡号
                        <input type="text" placeholder={"请输入卡号"}/>
                    </p>
                    <p className={"carbind_input"}>密码
                        <input type="text" placeholder={"请输入密码"}/>
                    </p>
                    <p className={"carbind_bind"}>
                        绑定到账户
                    </p>
                </Drawer>
            </div>
        );
    }
}
