const jwt = require("jwt-simple")
const key = "$%^&*()_)(*&^%$";

module.exports = {
    encode(adminName,exp=20*60*1000){
        return jwt.encode({
            adminName,
            exp:Date.now()+exp
        },key)
    },
    decode(token){
        try{
            const info = jwt.decode(token,key);
            if(info.exp>Date.now()){
                return {
                    ok:1,
                    msg:"验证成功",
                    info
                }
            }else{
                return {
                    ok:-1,
                    msg:"身份验证以过期"
                }
            }
        }catch(err){
            return {
                ok:-1,
                msg:"解析失败"
            }
        }
    }
}

