import React from 'react';
import {
    withRouter
} from 'react-router-dom';
import MyNav from '../components/public/MyNav'

class GuardRouter extends React.Component{
    
    componentDidMount(){
    }
    render(){
        document.title = this.props.meta.title;
        
        return (
            <div>
                <this.props.component {...this.props} />
                {this.props.meta.isFooter?<MyNav></MyNav>:null}
            </div>
            
        )
    }
}

export default withRouter(GuardRouter)