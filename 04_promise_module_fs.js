/**
 * 04_promise_fs_module.js
 * E:\Project\JS-Promise-Learning-Samples
 * ------------------------------------------------------------------
 * @Author: DZH
 * @Date: 2022/04/05 15:41:12
 * @Description: 
 * 封装一个函数 mineReadFile 读取文件内容
 * 参数 path 文件路径
 * 返回 promise对象
 * ------------------------------------------------------------------
 */


function myReadFile(path){
    return new Promise((resolve,reject)=>{
        require('fs').readFile(path,(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}



myReadFile('./resource/Sonnet_1.txt').then(value => {
    console.log(value.toString());
}, reason => {
    console.log(reason);
})