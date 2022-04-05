
// 声明一个Promise的函数

function Promise(executor) {

    // 添加属性

    this.PromiseState = 'pending'
    this.PromiseResult = null

    //声明一个属性callback
    this.callbacks = []


    const _this = this



    function resolve(data) {
        // 1. 修改状态 promiseState
        // 2. 设置对象结果值 promiseResult
        if (_this.PromiseState !== 'pending') return
        _this.PromiseState = 'fulfilled'
        _this.PromiseResult = data

        _this.callbacks.forEach(item => {
            item.onResolved(data)
        })

    }

    function reject(data) {
        // 1. 修改状态 promiseState
        // 2. 设置对象结果值 promiseResult
        if (_this.PromiseState !== 'pending') return
        _this.PromiseState = 'rejected'
        _this.PromiseResult = data

        _this.callbacks.forEach(item => {
            item.onRejected(data)
        })

    }

    // 同步调用执行器函数
    try {
        executor(resolve, reject);
    } catch (error) {
        reject(error)
    }


}



// 添加then方法

Promise.prototype.then = function (onResolved, onRejected) {
    const _this = this

    if(typeof onRejected !== 'function' ){
        onRejected = reason =>{
            throw reason 
        }
    }

    if(typeof onResolved !== 'function'){
        onResolved = value => value
    }

    return new Promise((resolve, reject) => {


        // 封装复用函数

        function callback(type){
            try {
                let result = type(_this.PromiseResult)
                if (result instanceof Promise) {
                    result.then(value => {
                        resolve(value);
                    }, reason => {
                        reject(reason)
                    })
                } else {
                    resolve(result);
                }
            } catch (error) {
                reject(error)
            }
        }

        if (this.PromiseState === 'fulfilled') {
            callback(onResolved)
        }

        if (this.PromiseState === 'rejected') {
            callback(onRejected)
        }

        if (this.PromiseState === 'pending') {
            //保存回调函数
            this.callbacks.push({
                onResolved: function () {
                    callback(onResolved)
                },
                onRejected: function () {
                    callback(onRejected)
                }
            })
        }

    })







}





// 添加catch方法

Promise.prototype.catch = function(onRejected){
    return this.then(undefined,onRejected)
}