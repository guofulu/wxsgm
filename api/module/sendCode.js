/*
*此为发送验证码模块
*依赖的模块为 help.getRandom(随机6位验证码)   querystring   request
*/
const {getRandom} = require("./help")
const querystring = require("querystring");
const requset = require("request");

module.exports = function(phoneId,cb){
    // http://v.juhe.cn/sms/send?mobile=手机号码&tpl_id=短信模板ID&tpl_value=%23code%23%3D654654&key=
    const code = getRandom(999999,100000);//获取刘伟验证码
    const mobile = phoneId;//获取手机号
    const tpl_id = '169555'
    const tpl_value = "#code#="+code;
    const key = "5f1dd2e997c84963ce4f046f782f2083"
    let url = "http://v.juhe.cn/sms/send";
    url += "?"+querystring.stringify({
        mobile,
        tpl_id,
        tpl_value,
        key
    })
    //console.log(6666,url);
            cb({
                ok:1,
                code,
            })
    
    // requset(url,function(err,response,body){
    //     //console.log(response,body);
    //     if(!err && response.statusCode === 200){

    //         cb({
    //             ok:1,
    //             code,
    //             response,
    //             body
    //         })
    //     }else{
    //         cb({
    //             ok:-1,
    //             msg:"发送失败"
    //         })
    //     }
    // })
}