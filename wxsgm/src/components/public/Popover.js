import React from "react"
import {Link} from "react-router-dom"
import { Modal, Button } from 'antd';

export default class Popover extends React.Component {
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <p type="primary" onClick={this.showModal} style={{fontSize:"0.6rem"}}>
                    ...
                </p>
                <Modal
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={"3rem"}
                    footer={false}
                    style={{position:"absoluter",left:"2rem",top:"0.7rem"}}
                    wrapClassName={"wrap"}
                    closable={false}
                >
                    <Link id={"popoverLink"} style={{padding:"0"}} to={"/"}>首页</Link>
                    <Link id={"popoverLink"} style={{padding:"0"}} to={"/myjuooo/myjuooo"}>我的聚橙</Link>
                </Modal>
            </div>
        );
    }
}
