// debounce throttle 本质上使用了定时器来防止函数重复执行
// https://www.cnblogs.com/cc-freiheit/p/10827372.html
// 思考 回调函数的方式为什么没有触发 debounce timer 初始化, 替代方式自己在内存中初始化变量

/**
 * 函数防抖（debounce）
 * 短时间内多次触发同一事件，只执行最后一次
 * 本质：使用定时器避免方法在短时间多次执行
 * @param {*} fn 
 * @param {*} delay 
 * @returns 
 */
function debounce(fn, delay = 1000) {
    let timer = null
    // console.log('debounce outter', timer) // 闭包：代码加载时就会初始化timer放在内存里，给下面的func使用
    return function() {
        if (timer) {
            clearTimeout(timer);
        }
        console.log('arguments:', arguments) // arguments 接收的是被触发事件传来的参数如:按钮点击事件e
        timer = setTimeout(function() {
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}

/**
 * 节流(throttle)
 * 指连续触发事件但是在 n 秒中只执行一次函数。即 2n 秒内执行 2 次... 。节流如字面意思，会稀释函数的执行频率。
 * 本质：通过比较当前事件触发时间和上一次的方法的执行时间，来决定是否执行
 * @param {*} fn 
 * @param {*} wait 
 * @returns 
 */
function throttle(fn, wait) {
    let previous = 0;
    return function() {
      let now = Date.now();
      if (now - previous > wait) {
        fn.apply(this, arguments);
        previous = now;
      }
    }
}