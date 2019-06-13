import {actionType} from '../store'
import axios from 'axios';

const userInfo = (flag) => ({
    type: actionType.LOGIN,
    validate: flag,
})

export const handelLogin = (user, pass) => {
    return ((disptach) => {
        //这里应该是post请求数据验证
        axios.get('./api/userInfo.json', { 
            userName: user,
            pass: pass
        }).then((res) => {
            console.log('res: ' + res.data)
            if(res.data.status === "true"){
                disptach(userInfo(res.data.status))
            }
        }
        ).catch((e) => {
            console.log("error:  " + e)
        })



    })
}
