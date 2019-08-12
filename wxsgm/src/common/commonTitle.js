import  React from 'react';
import  '../assets/scss/commonTitle.scss'
import {Icon,Modal} from 'antd'
import Popovers from '../components/public/Popovers'
class CommonTitle extends  React.Component{
    render(){
        return (
                <div className={'common-title'}>
                    <span className={'title__text'}>{this.props.commonTitle}</span>
                    <Icon type={'left'}  className={'title__ellipsis'} onClick={()=>{this.props.history.go(-1)}}> </Icon>

                    <Popovers/>
                </div>

        )
    }
}
export  default CommonTitle
