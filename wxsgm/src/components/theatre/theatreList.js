import React from 'react'
import  axios from "axios"
import "../../assets/css/My/MyShowListNav.css"
import "../../assets/css/My/MyshowsLibrary.css"
export default class theatreList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            show_category_list:[],
            datas:[]
        }
    }
    render(){
        return (
            <div style={{width:"100%",height:"100%"}}>
            <div className={"showListNav"}>
                <div className={"showListNull"}></div>
                <ul className={"showListUl"}>
                    <li onClick={this.getShowList.bind(this,0)}>全部</li>
                    {
                        this.state.show_category_list.map((v,i)=>{
                            return(
                                <li onClick={this.getShowList.bind(this,v.category_id)} key={i}>{v.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
                {
                    this.state.datas.map((v,i)=>{
                        return (
                            <div key={i} className={'showListContext'}>
                                <a href="#" className={'showListA'}>
                                    <div className={'showListPic'}>
                                        <img style={{width:"100%",height:"100%"}} src={"https://image.juooo.com/"+v.pic} alt=""/>
                                    </div>
                                    <div className={'showListPrice'}>
                                        <p className={'showListName'} style={{color:'#262626'}}>{v.schedular_name}</p>
                                        <h5>{v.show_time}</h5>
                                        <h5>{v.name}</h5>
                                        <p>￥{v.max_price}</p>
                                    </div>
                                </a>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
    componentDidMount(){
        axios.get("/juoooM/Search/getShowCategory?version=6.0.1&referer=2")
            .then(data=>{
                console.log(data.data)
                this.setState({
                    show_category_list:data.data.show_category_list
                })
            })
        this.getShowList.call(this,0)
    }
    getShowList(type){
        axios.get("/juoooM/Theatre/showListData?tid=2&category="+type+"&page=1")
            .then(data=>{
                this.setState({
                    datas:data.datas
                })
            })
    }

}