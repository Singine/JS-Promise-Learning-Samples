/**
 * 17_promise_async_await.js
 * E:\Project\JS-Promise-Learning-Samples
 * ------------------------------------------------------------------
 * @Author: DZH
 * @Date: 2022/04/06 16:00:43
 * @Description: 读取resource文件夹下面的文件 并拼接输出
 * ------------------------------------------------------------------
 */









const fs = require('fs')
const util = require('util')
const myReadFile = util.promisify(fs.readFile)

// 回调函数

// fs.readFile('./resource/Sonnet_1.txt', (err, data1) => {
//     if (err) throw err
//     fs.readFile('./resource/Sonnet_12.txt', (err, data2) => {
//         if (err) throw err
//         fs.readFile('./resource/Sonnet_18.txt', (err, data3) => {
//             if (err) throw err
//             console.log(data1 + data2 + data3);
//         })
//     })
// })





async function main() {
    try {
        let data1 = await myReadFile('./resource/Sonnet_1.txt')
        let data2 = await myReadFile('./resource/Sonnet_12.txt')
        let data3 = await myReadFile('./resource/Sonnet_18.txt')

        console.log(data1 + data2 + data3);
    } catch (error) {
        console.warn(error);
    }
}

main()