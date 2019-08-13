import React from 'react'
import {Link} from 'react-router-dom'
import '../../assets/css/My/moreTourShowList.css'
import  axios from "axios"
export default class moreTourShowList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[]
        }
    }
    render(){
        return (
            <div className={'TourShowList'}>
                <div className={"TourShowList_head"}>
                    <Link to={'/'}><span  className="iconfont">&#xeb99;</span></Link>
                    <p>巡回演出</p>
                    <div className={'dian'} onClick={()=>{alert('111')}}><span id={'dian'} className='iconfont'>&#xe637;</span></div>
                </div>
                {
                    this.state.data.map((v,i)=>{
                        console.log(v.cityItems)
                        return (
                            <div key={i} className={'TourShowList_context'}>
                                <div className={'TourShowList_item'}>
                                    <a href="#"><img src={v.pic} alt=""/></a>
                                </div>
                                <div className={'TourShowList_Time'}>
                                    <a href="#">{v.show_name}</a>
                                    <p className={'time'}>{v.display_show_time}</p>
                                    <div className={'TourShowList_City'}>
                                        {
                                            v.cityItems.map((v,i)=>{
                                                return (
                                                    <div className={'city'} key={i}>{v.city_name}</div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
    async getShopList(){
        const data = await axios.get('/juoooM/tour/ShowList')
        console.log(data)
        console.log(data.data.cityItems)
        this.setState({
            data:data.data
        })
    }
    componentDidMount(){
        this.getShopList()
    }
}