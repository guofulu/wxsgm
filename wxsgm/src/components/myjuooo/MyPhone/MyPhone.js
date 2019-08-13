import React from "react"
import { Drawer, Button, Radio } from 'antd';

const RadioGroup = Radio.Group;

export default class MyPhone extends React.Component {
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
            <div className={"phone_warp_warp"}>
                <RadioGroup
                    style={{ marginRight: 1 }}
                    defaultValue={this.state.placement}
                    onChange={this.onChange}
                >
                </RadioGroup>
                <p type="primary" onClick={this.showDrawer} className={"phone"}>
                    客服帮助
                </p>
                <Drawer
                    placement={this.state.placement}
                    closable={true}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    maskClosable={true}
                    height={"100%"}
                    className={"phone_warp"}
                    z-index={-1}
                >
                    <div className={"phone_mine_warp"}>
                        <div className={"phone_mine_left phone_hard"}>
                            <p className={"phone_img phone_img_left"}>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAABCCAMAAAAyozueAAAAnFBMVEUAAAD+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7xIzj2AAAAM3RSTlMAcED58bCAD8vAMyES9SsL67Z1BeemTDvgxI4WyGJgUBzu06KTiXxd5M+smIRn2bpUBzDvgkMzAAACm0lEQVRYw6TT207yQBiF4QUtbYHu7EZsLRUjFYJBo+/939ufTMLBb7qZynP4TbJmTWZGY8KXbvXpOjju56p7CfUn4bXhf811ftT2w8Eomq/VV1NgOB9bzeHXJqXydv5tsvMqk1T7svZYAKm3/d3RS4HiUXbyGnCzpGcpyVygzmUheQDKZ/V7LoGHRJP8AKJWw9oIAn+yTQXpRmM2KVRTjS5w3mrc9gwXjcrgNdaU+BWy0coOLDVtCc7Y4QN4l413CDToCoHsBHDVgPwJNrKzgadc/fZQylYJ++GusWzFEAyurGVvPbSrB63steCpTwW+7PlQqUfiEGiOACfpv8lac9T9r+QEe82xh1P/U99pjl3vJzqUEGuOGMrDr9GxAEhPsndKAYpjrJvvIzetbLXcHL9l+A3gXjqvhDSXnTyF0usuLtD4ZlKBuzCZb7P++5s5y8KFKpfkwTmWsYCl7CxhISM+gyeFEdGP7sjRT0QUKoNOd+Wog0xrONyZc4C1/jVTb7sJAlEYhX8dPAKxoEVSahUwWipV0/X+79ZSJO1VAw4X/R5gZc8keztksuwowxEE1p0ABCPrzuhfdvr5H5/CulPgawqeZceDqcYQWnZCGMs1pDurzi7FuNIJisSikxRwkrQ4Qxypsod1+yO/VyWK4bzQFzcGsnKzHRv8hdpZ+JjxdlNmQOzeJgtoHNTWgUaQqBFdqJhS7ZV8u0T6zRseX66JOliuMO9DT7au8KgeFLCWvSPMZM976GecAHLZe4LXSS8ZY/8qLwCu6mKez2r5XDfLzQpMt8zEoeFMVEnCGIjn6mQIvlPxYSg3Kp+pnCbqZguD5sKtDLW3D8miU5uGO8mq8zDLB/eudwTZqJJBpPu5/HBlYZBSSwf60ycn4nQzmkwtyAAAAABJRU5ErkJggg==" alt=""/>
                            </p>
                            <p>在线咨询</p>
                        </div>
                        <div className={"phone_mine_right phone_hard"}>
                            <p className={"phone_img phone_img_right"}>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAMAAAC7xnO3AAAAqFBMVEUAAAD+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v5OdmBFAAAAN3RSTlMA+8YPCwMdFQfwL+tbNyP3885+GeaWSCvBpIlB3tRy19C+jlZOkYNm4revqZ93Yzy6mmgo2bNtKt3gNQAAArVJREFUSMedlumSqjAUhAnKJsguArKIKLiPjku//5vdTJWDiNGJt/8lxUeak9OnEG6S4xSwCkP4VOMCIDagXT8EByJQ1PPYh1Z+DG5MQVANDfnwU9ATqKQdwcr7CIxuj/e2QKxyguYPqLRWVs0H9qMWSDVZwp9wkYaNy8OX1TZEmYfcYPlYTXUERH0OMsG2UxHlAOJykCDfT8XOoc85SD142is1XJT/IqURkr9biVC3T9rz3MwZ2/7TmcdOwZmKcB539740rHp/krVFdp2t3oorbLIDsZOOK0HE0/VVt0bjFMsxV8gShN7jlVD/PJJikKy1nvsIFc7pdYZj3lO3gRYInNoBM6kp7AaJyUvKYrsFM4K9wKvSxkFpKpZiqvCS/SOI++tXqghc/vE3bSXSdKBPuFHDag0fw6YLbr8LYPSbGZUuoh53fQsga0+iWOVFhwn0oNW6lsuNGjbSQTOvE1jxg+HxvAxefLxUAYXZdO8SJLo/6VWpZuth+aJKW2AtN6dOAfFmXzUcgh9pMbtwygXYKo29FaC7HjUz2FjANAtiH2R9YqJmCIyatyoznQL1MPMBP/6JcODQjUB60Utk1r8XTSSABtjryc3HmkDP+sy7SSnau5twHRtE3Dc7vUoDjswUfuUPqHCqZ+7DpxlnIGS29YSio3bK1O67D0Cyl1inUsOR965RRwTajoUOHWBtvovH1YdlMEdaCISDN6hU+lix7/UCpHOWn3sONYEpZdvcG1t7glcvdZt7YyqG9Tp0CSDOBbZoCIs3US8A31UEdvWtdzPZm9kgh4AJYvH2j0k1poA+O3VbxWmm3WudjjYgXr3OiYRG8S+pZWgBxbcsNSfygVTyLicgojtUVNp3cp3zglTjKgewXFff2YI6IAsK8mrghqAioMpbrcXl2ViINuCv3CYJ/wACS1E4BZxv/wAAAABJRU5ErkJggg==" alt=""/>
                            </p>
                            <p>电话咨询</p>
                        </div>
                    </div>
                    <p className={"phone_footer"}>咨询时间：周一至周五 08:30-20:00，周末 08:30-18:00</p>
                </Drawer>
            </div>
        );
    }
}