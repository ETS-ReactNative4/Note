// 函数的 arguments ====================================================
function logArg() {
    console.log(arguments)

    // console.log(Array.prototype.slice.call(arguments))
    console.log([...arguments])
}

logArg(12,2,'adv')
// Arguments(3) [12, 2, 'adv', callee: ƒ, Symbol(Symbol.iterator): ƒ]
// (3) [12, 2, 'adv']


// 理解apply JavaScript/JS-this-call-apply
function logger() {
    console.log.apply(null, ['%c###', 'color: red;'].concat(Array.prototype.slice.call(arguments)));
}

logger('讲师已关闭连麦')