import React from 'react';
import '../../assets/scss/vipIndex/vipFreeView.scss'
class VipFreeView extends React.Component{

    render(){
        //console.log(2323232323,this.props)
        return (
            <>

                <div className={'vip-plus__free-view'}>
                    <div className={'entry-block'}>
                        <div className={"entry-block__title"}>
                            免费观影
                            <span className={"entry-block__title__desc"}></span>
                        </div>
                        <div className={"free-view"}>
                            {
                                this.props.WatchPerList.list.map((v,i)=>{
                                    return (
                                        <div key={i} className={"free-view__item"} onClick={()=>{this.props.history.push('/ticket/'+v.schedular_id)}}>
                                            <div className={'show-cell'}>
                                                <img src={v.pic} alt='' />
                                                <div className={'show-cell__name'}>
                                                    {v.schedular_name}
                                                </div>
                                            </div>
                                            <div className={"free-view-show-cell__price"}>
                                                ￥0
                                                <span className={'free-view-show-cell__price__origin'}>
                                                    {'￥'+v.price}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                    <div className={"vip-plus__free-view__count"}>

                    </div>
                </div>

                <div className={'vip-plus__free-view'}>
                    <div className={'entry-block'}>
                        <div className={"entry-block__title"}>
                            双倍积分
                            <span className={"entry-block__title__desc"}></span>
                        </div>
                        <img className={'vip-plus__double-points__img'} src={'https://m.juooo.com/static/img/vip_plus_double_points.e9a6530.png'} alt='' />
                    </div>
                    
                    
                </div>

                <div className={'vip-plus__free-view'}>
                    <div className={'entry-block'}>
                        <div className={"entry-block__title"}>
                            全场包邮
                            <span className={"entry-block__title__desc"}></span>
                        </div>
                        <img className={'vip-plus__double-points__img'} src={'https://m.juooo.com/static/img/vip_plus_free_shipping.2edb583.png'} alt='' />
                    </div>
                    
                </div>
                <div className={'vip-plus__more'}> 
                    更多VIP+尊享权益，敬请期待
                </div>
            </>
        )
    }
}

export default VipFreeView