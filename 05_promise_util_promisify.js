/**
 * 05_promise_util_promisify.js
 * E:\Project\JS-Promise-Learning-Samples
 * ------------------------------------------------------------------
 * @Author: DZH
 * @Date: 2022/04/05 15:46:26
 * @Description: util.promisify 方法
 * ------------------------------------------------------------------
 */

const util = require('util')
const fs = require('fs')

let myReadFile = util.promisify(fs.readFile)

myReadFile('./resource/Sonnet_1.txt').then(value => {
    console.log(value.toString());
}, reason => {
    console.log(reason);
})