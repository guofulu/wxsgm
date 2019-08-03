import React from 'react';
import {
    NavLink,
} from 'react-router-dom';
import '../../assets/scss/home/advertionWrap.scss';
class Adeertion extends React.Component{
    
    render(){
        return (
            <div className={'advertion-wrap'}>
                <div className={'label-item'}>
                    {
                        this.props.classify_list.map((v,i)=>{
                            return (
                                <NavLink key={i} className={'label-item__block__column'} to={{
                                    pathname:'/myjuooo/myjuooo',
                                    query:{
                                        tid:'234',
                                    }
                                }}>
                                    <img src={v.pic} alt={''} />
                                    <span >{v.name}</span>
                                </NavLink>
                            )
                        })
                    }
                    
                </div>
                <div className={'vip-ahead'}>
                    <NavLink className={'vip-ahead__advert'} to={'qewqrqr'}>
                        <div className={'vip-ahead__advert__left'}>
                            <span style={{fontSize:'.3rem',marginRight:'.1rem',fontWeight:'900'}}>优先购票</span>
                            <span>VIP+会员尊享权益</span>
                        </div>
                        <div>
                            <span>开通会员99元/年</span>
                            <span>&gt;</span>
                        </div>
                    </NavLink>
                    <NavLink  className={'vip-ahead__list'} to={'io'} >
                        <div className={'div-1'}>
                            <img src={'https://image.juooo.com/group1/M00/02/E9/rAoKmV1EA9CAf09qAACEU5NfPaE667.jpg'} alt={''} />
                        </div>
                        <div className={'div-2'}>
                            <h3>【万有音乐系】你眼里的蓝之音色幻想—西安站</h3>
                            <p className={'p-1'}>西安 | 西安果核剧场</p>
                            <p className={'p-2'}>
                                <span className={'p-span-1'}>08/03 16:18</span>
                                <span className={'p-span-2'}>开始</span>
                            </p>
                        </div>
                        <span className={'div-span'}>开售提醒</span>
                    </NavLink>
                </div>
                
                <div className={'operation'}>
                    <ul className={'operation-ul-1'}>
                        <NavLink className={'ul-1-li'} to={'yu'}>
                            <h3>{this.props.operation_list[0].name}</h3>
                            <img src={this.props.operation_list[0].pic} alt='' />
                            <p  dangerouslySetInnerHTML={{__html:this.props.operation_list[0].describe }}></p>
                        </NavLink>
                        <NavLink className={'ul-1-li'} to={'yo'}>
                            <h3>{this.props.operation_list[1].name}</h3>
                            <img src={this.props.operation_list[1].pic} alt='' />
                            <p  dangerouslySetInnerHTML={{__html:this.props.operation_list[1].describe }}></p> 
                        </NavLink>
                    </ul>
                    <ul className={'operation-ul-2'}>
                        <NavLink className={'ul-2-li'} to={'yo'}>
                            <h3>{this.props.operation_list[2].name}</h3>
                            <p  dangerouslySetInnerHTML={{__html:this.props.operation_list[2].describe }}></p>
                            <img src={this.props.operation_list[2].pic} alt='' />
                        </NavLink>
                        <NavLink className={'ul-2-li'} to={'yu'}>
                            <h3>{this.props.operation_list[3].name}</h3>
                            <p  dangerouslySetInnerHTML={{__html:this.props.operation_list[3].describe }}></p>
                       
                            <img src={this.props.operation_list[3].pic} alt='' />
                        </NavLink>
                        <NavLink className={'ul-2-li'} to={'ti'}>
                            <h3>{this.props.operation_list[4].name}</h3>
                            <p  dangerouslySetInnerHTML={{__html:this.props.operation_list[4].describe }}></p>
                     
                            <img src={this.props.operation_list[4].pic} alt='' />
                        </NavLink>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Adeertion
