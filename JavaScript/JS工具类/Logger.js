// 函数的 arguments ====================================================
function logArg() {
    console.log(arguments)

    // console.log(Array.prototype.slice.call(arguments))
    console.log([...arguments])

    // 获取到要插入的页面元素
}

logArg(12,2,'adv')
// Arguments(3) [12, 2, 'adv', callee: ƒ, Symbol(Symbol.iterator): ƒ]
// (3) [12, 2, 'adv']


// 理解apply JavaScript/JS-this-call-apply
function logger() {
    console.log.apply(null, ['%c###', 'color: red;'].concat(Array.prototype.slice.call(arguments)));
}

logger('讲师已关闭连麦')

/**
 * 将log插入到页面
 * @param {*} msg 
 * @param {*} error 
 */
function showMsg(msg, error) {
    const msgEle = document.querySelector('#log');
    if (typeof msg === 'string') {
        msgEle.innerHTML += `<p>${msg}</p>`; 
    } 
    if (typeof msg === 'object') {
        msgEle.innerHTML += `<p>${JSON.stringify(msg, null, 2)}</p>`
    }
    if (typeof error !== 'undefined') {
      console.error(error);
    }
}