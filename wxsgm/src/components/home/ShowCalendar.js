import React from 'react';
import Eticket from "../eticket/Eticket";
import Popover from "../public/Popover";
import {Link} from "react-router-dom"

import './showCalendar.css';

import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css'
import {Calendar, Select, Radio, Col, Row} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import homeCreator from '../../store/actionCreator/home';

const {Group, Button} = Radio;

class ShowCalendar extends React.Component {

    componentDidMount() {
        this.props.getShowList("2019/8/16");
        //console.log(753753753,this.props);
    }

    render() {
        console.log('render',this.props.showList);
        function onSelect(value) {
            let d = new Date(value._d).getTime();
            let newTime = new Date(d).getFullYear()+"/"+new Date(d).getMonth()+"/"+new Date(d).getDay();
            console.log(newTime);
            // this.props.getShowList(newTime);
        }

        return (
            <div>
                <div>
                    <div className={"navbar_on_center"}>
                        <Link className={"My_left"} to={"/"}>&lt;</Link>
                        <div className={"My_center"}>
                            演出日历
                        </div>
                        <Popover></Popover>
                    </div>
                    <div style={{width: "5rem", height: "0.9rem"}}>
                        <img src="../../assets/img/eticket.png" alt=""/>
                    </div>
                </div>

                {/*第二*/}
                <div data-v-b5e816fe="" className="show_type_wrap">
                    <div data-v-b5e816fe="" className="show_type">
                        <ul data-v-b5e816fe="" className="show_type_ul">
                            <li className="active" style={{pointerEvents: "auto"}}>全部</li>
                            <li className="" style={{pointerEvents: "auto"}}>演唱会</li>
                            <li className="" style={{pointerEvents: "auto"}}>音乐会</li>
                            <li className="" style={{pointerEvents: "auto"}}>话剧歌剧</li>
                            <li className="" style={{pointerEvents: "auto"}}>儿童亲子</li>
                            <li className="" style={{pointerEvents: "auto"}}>音乐剧</li>
                            <li className="" style={{pointerEvents: "auto"}}>戏曲综艺</li>
                            <li className="" style={{pointerEvents: "auto"}}>展览</li>
                            <li className="" style={{pointerEvents: "auto"}}>舞蹈芭蕾</li>
                        </ul>
                    </div>
                    <div data-v-b5e816fe="" className="city_wrap">
                        <span style={{lineHeight:"45px"}} data-v-b5e816fe="" className="city">全国</span>
                        <span style={{lineHeight:"45px"}} data-v-b5e816fe="" className="city_icon">fd</span>
                    </div>
                </div>

                {/*日历*/}
                <Calendar
                    fullscreen={false}
                    headerRender={({value, type, onChange, onTypeChange}) => {
                        const start = 1;
                        const end = 12;
                        const monthOptions = [];

                        const current = value.clone();
                        const localeData = value.localeData();
                        const months = [];
                        for (let i = 0; i < 12; i++) {
                            current.month(i);
                            months.push(localeData.monthsShort(current));
                        }

                        for (let index = start; index < end; index++) {
                            monthOptions.push(
                                <Select.Option className="month-item" key={`${index}`}>
                                    {months[index]}
                                </Select.Option>,
                            );
                        }
                        const month = value.month();

                        const year = value.year();
                        const options = [];
                        for (let i = year - 10; i < year + 10; i += 1) {
                            options.push(
                                <Select.Option key={i} value={i} className="year-item">
                                    {i}
                                </Select.Option>,
                            );
                        }
                        return (
                            <div style={{padding: 10}}>
                                <Row type="flex" justify="space-between">
                                    <Col>
                                        <Group size="small" onChange={e => onTypeChange(e.target.value)}
                                               value={type}>
                                            <Button value="month">Month</Button>
                                            <Button value="year">Year</Button>
                                        </Group>
                                    </Col>
                                    <Col>
                                        <Select
                                            size="small"
                                            dropdownMatchSelectWidth={false}
                                            className="my-year-select"
                                            onChange={newYear => {
                                                const now = value.clone().year(newYear);
                                                onChange(now);
                                            }}
                                            value={String(year)}>
                                            {options}
                                        </Select>
                                    </Col>
                                    <Col>
                                        <Select
                                            size="small"
                                            dropdownMatchSelectWidth={false}
                                            value={String(month)}
                                            onChange={selectedMonth => {
                                                const newValue = value.clone();
                                                newValue.month(parseInt(selectedMonth, 10));
                                                onChange(newValue);
                                            }}>
                                            {monthOptions}
                                        </Select>
                                    </Col>
                                </Row>
                            </div>
                        );
                    }}
                    onSelect={onSelect}
                />



                <div>
                    <section data-v-b5e816fe="" className="recommend-wrap" style={{pointerEvents: "auto"}}>
                        <div data-v-b5e816fe="" className="recommend-list">
                            <ul data-v-b5e816fe="">
                                {
                                    this.props.showList.map(v => {
                                        return (
                                            <li data-v-b5e816fe="" key={v.show_id}>
                                                <div data-v-b5e816fe="" className="show-icon">
                                                    <a data-v-b5e816fe="" href={"https://m.juooo.com/ticket/"+v.schedular_id}>
                                                        <img data-v-b5e816fe=""
                                                             src={v.pic}
                                                             alt=""/>
                                                    </a>
                                                    <div data-v-b5e816fe="" className="juooo_sponsor">
                                                        <span className={v.tag_icon}></span>
                                                    </div>
                                                </div>
                                                <div data-v-b5e816fe="" className="item-desc">
                                                    <p data-v-b5e816fe="" className="show-date">
                                                        <strong data-v-b5e816fe="">{v.show_time_top}</strong>
                                                    </p>
                                                    <a data-v-b5e816fe="" href="https://m.juooo.com/ticket/99973">
                                                        <h3 data-v-b5e816fe=""
                                                            className="title text-double">{v.name}</h3>
                                                    </a>
                                                    <p data-v-b5e816fe="" className="venue text-single">{v.city_name} |
                                                        {v.venue_name}</p>
                                                    <p data-v-b5e816fe="" className="price">
                                                        <strong data-v-b5e816fe="" className="c_ff6">￥{v.min_price}</strong>起
                                                    </p>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div data-v-b5e816fe="" className="van-loading van-loading--circular van-loading" style={{color: "rgb(255, 121, 25)"}}>
                        <span data-v-b5e816fe="" className="van-loading__spinner van-loading__spinner--circular">
                            <svg data-v-b5e816fe="" viewBox="25 25 50 50" className="van-loading__circular">
                                <circle data-v-b5e816fe="" cx="50" cy="50" r="20" fill="none">
                                </circle>
                            </svg>
                        </span>
                        </div>
                        <p data-v-b5e816fe="" className="no-more-tip" style={{display: "none"}}>没有更多了</p>
                    </section>
                </div>
            </div>
        );
    }

}


export default connect((state)=>({
    showList:state.home.getShowList
}),(dispatch)=>bindActionCreators(homeCreator,dispatch))(ShowCalendar);

