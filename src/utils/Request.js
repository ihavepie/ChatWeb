import axios from 'axios'

// 封装请求
export default function request(config){
    const instance = axios.create({
        baseURL:'http://47.113.200.52:8080/ChatWeb-1',
        method: 'post',
        // transformRequest: [
        //     function (data) {
        //         return qs.stringify(data)
        //     }
        // ],
    })
    // return new Promise((resolve,reject) => {
    //     instance(config).
    //     then(res=>{
    //         resolve(res)
    //     }).
    //     catch(err=>{
    //         reject(err)
    //     })
    // })
    return instance(config)
}