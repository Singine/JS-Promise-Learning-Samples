const fs = require('fs')

// MARK 回调函数的形式

// fs.readFile('./resource/Sonnet_1.txt', (err, data) => {

//     if (err) throw err
//     console.log(data.toString());

// })


// MARK Promise的形式

    let p = new Promise((resolve,reject)=>{
        fs.readFile('./resource/Sonnet_1.txt', (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })

    p.then(value => {
        console.log(value.toString());
    }, reason => {
        console.log(reason);
    })