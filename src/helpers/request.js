import axios from 'axios'
import {Message} from 'element-ui'

axios.defaults.baseURL = 'http://blog-server.hunger-valley.com';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true
/*
* 对axios的request进行封装，使用更加方便
* 传入三个参数:url,请求类型,请求的数据。
* 可以直接在控制台模拟请求
*
* */
export default function request(url, type = "GET", data = {}) {
    return new Promise((resolve, reject) => {
        let options = {
            url:url,
            method: type
        }
        // console.log(-1)
        console.log(options.url)
        if (type.toLowerCase() === "get") {
            // console.log(0)
            options.params = data
            // console.log(options.params)
            // console.log(11)
        } else {
            // console.log(1)
            options.data = data
            // console.log("data",options.data)
        }
        console.log(88)
        console.log(options)
        console.log(1099)
        axios(options).then(res => {
            if (res.data.status === 'ok') {
                console.log(899)
                resolve(res)
                console.log(999)

            } else {
                console.log(1098)
                Message.error(res.data.msg)
                reject(res)
            }
        }).catch(e => {
            console.log(e)
            Message.error("网络异常")
            reject({msg: "网络异常"})
        })
    })
}