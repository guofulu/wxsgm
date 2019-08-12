import React from 'react';
import axiso from 'axios';
import '../../assets/scss/login/passport.scss';

class PassPort extends React.Component{
    constructor(){
        super()
        this.state = {
            inPutOne:false,
            inPutTwo:false,
            inPutThree:false,
            inPutFour:false,
        }
    }
   
    componentDidMount(){
        const arr = document.querySelectorAll('.lg-input')
        for(let i=0;i<arr.length;i++){
            arr[i].addEventListener('change',()=>{
            console.log('监听触发')
            console.log(this.state)
            if(this.state.inPutOne && this.state.inPutTwo && this.state.inPutThree && this.state.inPutFour){
                const arr =  document.querySelectorAll('.lg-input');
                const str = ''+arr[0].value+arr[1].value+arr[2].value+arr[3].value
                console.log('验证码',str)
            }
        })
        }
        
    }
    render(){
        return (
            <div className={'verify-wrap'}>

                <div className={'main'}>
                    <div className={'login-wrap'}>
                        <h1 className={'login-title'}>验证码</h1>
                        <p className={'verify-tip'}>
                            已经验证码发送至手机
                            <span>{'手机号'}</span>
                        </p>
                        <div className={'login-area'}>
                            <form>
                                <ul className={'ve-list'}>
                                    <li className={'ve-item'}>
                                        <input className={'lg-input'} name='inPutOne' type='text' onChange={()=>{
                                            //this.handlerChange()
                                            const  arr = document.querySelectorAll('.lg-input')
                                            if(arr[0].value.length>0){
                                                console.log('1')
                                                this.state.inPutOne = true
                                                arr[1].focus()
                                            }else{
                                                this.state.inPutOne = false
                                            }
                                        }} />
                                    </li>
                                    <li className={'ve-item'}>
                                        <input className={'lg-input'} name='inPutTwo' type='text' onChange={()=>{
                                            const  arr = document.querySelectorAll('.lg-input')
                                            if(arr[1].value.length>0){
                                                console.log('2')
                                                this.state.inPutTwo = true
                                                arr[2].focus()
                                            }else{
                                                this.state.inPutTwo = false
                                                arr[0].focus()
                                            }
                                        }}/>
                                    </li>
                                    <li className={'ve-item'}>
                                        <input className={'lg-input'} name='inPutThree' type='text' onChange={()=>{
                                            const  arr = document.querySelectorAll('.lg-input')
                                            if(arr[2].value.length>0){
                                                console.log('3')
                                                this.state.inPutThree = true
                                                arr[3].focus()
                                            }else{
                                                this.state.inPutThree = false
                                                arr[1].focus()
                                            }
                                        }}/>
                                    </li>
                                    <li className={'ve-item'}>
                                        <input className={'lg-input'} name='inPutFour' type='text' onChange={()=>{
                                            const  arr = document.querySelectorAll('.lg-input')
                                            if(arr[3].value.length>0){
                                                this.state.inPutFour = true;
                                                console.log('4');
                                            }else{
                                                this.state.inPutFour = false
                                                arr[2].focus()
                                            }
                                        }}/>
                                    </li>
                                </ul>
                            </form>
                        </div>
                        <p className={"set-time "}>重新获取验证码</p>
                    </div>
                </div>

                <div ref='dialogs' className={'dialog'} >
                    <p  ref='tipsText' className={'tips-text'}>这是提示用的 </p>
                </div>

            </div>
        )
    }
}
export default PassPort;


// class My extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             userName:"",
//             passWord:"",
//             sex:2,
//             hot:1
//         }
//         this.handlerChange = this.handlerChange.bind(this);
//     }
//     handlerChange(e){
//         this.setState({
//             [e.target.name]:e.target.value
//         })
//     }
//     formSubmit(e){
//         console.log("userName:"+this.state.userName);
//         console.log("passWord:"+this.state.passWord);
//         console.log("sex:"+this.state.sex);
//         console.log("hot:"+this.state.hot);
//         e.preventDefault();
//     }
//     render(){
//         return (
//             <div>
//                 <form onSubmit={this.formSubmit.bind(this)}>
//                     <input type="text" name="userName" onChange={this.handlerChange} value={this.state.userName}/>
//                     <input type="password" name="passWord" onChange={this.handlerChange} value={this.state.passWord}/>
//                     <div>
//                         <select name="sex" onChange={this.handlerChange} value={this.state.sex}>
//                             <option value="1">男</option>
//                             <option value="2">女</option>
//                         </select>
//                     </div>
//                     <div>
//                         <input name="hot" onChange={this.handlerChange} checked={this.state.hot/1===1} type="radio" value={1}/>是
//                         <input name="hot" onChange={this.handlerChange} checked={this.state.hot/1===2} type="radio" value={2}/>否
//                     </div>
//                     <input type="submit" value="提交"/>
//                 </form>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<My/>,document.querySelector("#myApp"));
// }
// }