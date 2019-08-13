import React from 'react';
import {
    withRouter
} from 'react-router-dom';
import MyNav from '../components/public/MyNav'

class GuardRouter extends React.Component{
    
    componentDidMount(){
        //console.log(666666666666666,this.props)
        if(this.props.meta.isLogin){
            if(!localStorage.token){
                this.props.history.push('/login')
            }
        }
    }
    render(){
        document.title = this.props.meta.title;
        return (
            <>
                <this.props.component {...this.props} />
                {this.props.meta.isFooter?<MyNav></MyNav>:null}
            </>
            
        )
    }
}

export default withRouter(GuardRouter)