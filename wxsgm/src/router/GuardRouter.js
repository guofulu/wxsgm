import React from 'react';


class GuardRouter extends React.Component{
    
    componentDidMount(){
        console.log('经过路由守卫')
    }
    render(){
        document.title = this.props.meta.title;
        return (
            <this.props.component {...this.props} />
        )
    }
}

export default GuardRouter