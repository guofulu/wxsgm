import React from 'react';
import {
    NavLink
} from 'react-router-dom';
import '../../assets/scss/home/recommendBlock.scss'

class RecommendBlock extends React.Component{

    componentDidMount(){
        
    }
    render(){
        //console.log(82828282,this.props.RecommendShow)
        return (
            <div className={"recommend-block recommend-wrap"}>
                <div className={'recommend-block__wrap'}>
                    <h3 className={'recommend-block__wrap__title'}>
                        为你推荐
                    </h3>
                </div>
                <div className={"recommend-block__list recommend-list"}>
                    <ul className={'content'}>
                        {
                            this.props.RecommendShow.recommend_show_list.map((v,i)=>{
                                return (
                                    <li key={i}>
                                        <div className={'show-icon'}>
                                            <NavLink to={'null'} className={'show-icon-a'}>
                                                <img src={v.schePic} alt='' />
                                            </NavLink>
                                            <div  dangerouslySetInnerHTML={{__html: v.tag_icon}}></div>
                                        </div>
                                        <div className={"item-desc"}>
                                            <p className={'show-date'}>
                                                <strong>
                                                    {
                                                        v.show_time
                                                    }
                                                </strong>
                                                <span></span>
                                            </p>
                                            <NavLink to={'null'} className={'item-desc-a'} >
                                                <h3 className={' text-double'}>
                                                    {v.show_name}
                                                </h3>
                                            </NavLink>
                                            <p className={'venue text-single'}>
                                                {v.c_name+' | '+v.v_name}
                                            </p>
                                            <p className={'price'}>
                                                <strong className={'c_ff6'}>
                                                    {v.low_price}
                                                </strong>
                                                <span>起</span>
                                            </p>
                                        </div>
                                    </li>

                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default RecommendBlock