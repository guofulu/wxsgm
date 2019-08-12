import React from 'react';
import {
    NavLink,
} from 'react-router-dom';
import '../../assets/scss/home/advertionWrap.scss';
class Adeertion extends React.Component{
    constructor(props){
        super(props)
       // console.log(66666,this.props)
    }
    render(){
       // console.log(131313132,this.props.ClassifyHome.classify_list)
        return (
            <div className={'advertion-wrap'}>
                {/* 导航 */}
                <div className={'label-item'}>
                    {
                        this.props.ClassifyHome.classify_list.map((v,i)=>{
                            return (
                                <NavLink key={i} className={'label-item__block__column'} to={'/show/showsLibrary/'+v.category_id}>
                                    <img src={v.pic} alt={''} />
                                    <span >{v.name}</span>
                                </NavLink>
                            )
                        })
                    }
                    
                </div>
                {/* 图片广告 */}
                {/* <div style={this.props.ClassifyHome.ad_list.advert1.length>0?{display:'block'}:{display:'none'}} className={'advertion'}>
                    <NavLink to={'/ticket/102444'} className={'advertion__block'}>
                        <img src={this.props.ClassifyHome.ad_list.advert1[0].pic} alt='' />
                    </NavLink>
                </div> */}
                {/* vip广告 */}
                <div className={'vip-ahead'}>
                    <NavLink className={'vip-ahead__advert'} to={'/vip/index'}>
                        <div className={'vip-ahead__advert__left'}>
                            <span style={{fontSize:'.3rem',marginRight:'.1rem',fontWeight:'900'}}>优先购票</span>
                            <span>VIP+会员尊享权益</span>
                        </div>
                        <div>
                            <span>开通会员99元/年</span>
                            <span>&gt;</span>
                        </div>
                    </NavLink>
                    <NavLink  className={'vip-ahead__list'} to={'/ticket/'+this.props.VipHomeSchedular.priorList[0].schedular_id} >
                        <div className={'div-1'}>
                            <img src={this.props.VipHomeSchedular.priorList[0].pic} alt={''} />
                        </div>
                        <div className={'div-2'}>
                            <h3>{this.props.VipHomeSchedular.priorList[0].schedular_name}</h3>
                            <p className={'p-1'}>{this.props.VipHomeSchedular.priorList[0].city_name +' | '+ this.props.VipHomeSchedular.priorList[0].venue_name}}</p>
                            <p className={'p-2'}>
                                <span className={'p-span-1'}>{this.props.VipHomeSchedular.priorList[0].end_time}</span>
                                <span className={'p-span-2'}>开始</span>
                            </p>
                        </div>
                        <span className={'div-span'}>开售提醒</span>
                    </NavLink>
                </div>
                {/* 五个操作 */}
                <div className={'operation'}>
                    <ul className={'operation-ul-1'}>
                        <NavLink className={'ul-1-li'} to={'/plus/index'}>
                            <h3>{this.props.ClassifyHome.operation_list[0].name}</h3>
                            <img src={this.props.ClassifyHome.operation_list[0].pic} alt='' />
                            <p  dangerouslySetInnerHTML={{__html:this.props.ClassifyHome.operation_list[0].describe }}></p>
                        </NavLink>
                        <NavLink className={'ul-1-li'} to={'/vip/index'}>
                            <h3>{this.props.ClassifyHome.operation_list[1].name}</h3>
                            <img src={this.props.ClassifyHome.operation_list[1].pic} alt='' />
                            <p  dangerouslySetInnerHTML={{__html:this.props.ClassifyHome.operation_list[1].describe }}></p> 
                        </NavLink>
                    </ul>
                    <ul className={'operation-ul-2'}>
                        <NavLink className={'ul-2-li'} to={'/scores/index'}>
                            <h3>{this.props.ClassifyHome.operation_list[2].name}</h3>
                            <p  dangerouslySetInnerHTML={{__html:this.props.ClassifyHome.operation_list[2].describe }}></p>
                            <img src={this.props.ClassifyHome.operation_list[2].pic} alt='' />
                        </NavLink>
                        <NavLink className={'ul-2-li'} to={'/演出日历'}>
                            <h3>{this.props.ClassifyHome.operation_list[3].name}</h3>
                            <p  dangerouslySetInnerHTML={{__html:this.props.ClassifyHome.operation_list[3].describe }}></p>
                       
                            <img src={this.props.ClassifyHome.operation_list[3].pic} alt='' />
                        </NavLink>
                        <NavLink className={'ul-2-li'} to={'/欢聚橙卡'}>
                            <h3>{this.props.ClassifyHome.operation_list[4].name}</h3>
                            <p  dangerouslySetInnerHTML={{__html:this.props.ClassifyHome.operation_list[4].describe }}></p>
                     
                            <img src={this.props.ClassifyHome.operation_list[4].pic} alt='' />
                        </NavLink>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Adeertion
