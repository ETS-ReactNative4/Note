exports = module.exports = function a() {
    // console.log("I'm function a")
    // console.log(module.parent)
    console.log(require.cache)
}

exports.b = function b() {
    console.log("I'm function b")
}

exports.c = "I'm constant from lib"
