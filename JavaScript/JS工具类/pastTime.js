/**
 * 格式化 已经过去的时间
 * @param {*} value 时间戳(ms) 或时间对象
 * @returns 
 */
function elapsed(value) {

    const time = Date.now() - new Date(value)

    const times = [31536000000, 2592000000, 86400000, 3600000, 60000, 1000] 
    const units = ['年前', '月前', '天前', '小时前', '分钟前', '秒前']

    let index = times.findIndex(t => t < time)

    if (index > -1) {
        return Math.round(time/times[index]) + units[index]
    } else {
        return format(value)
    }
}

console.log(elapsed(1649743490030))
// 14秒前

/**
 * 13位时间戳
 * @param {*} value 
 * @returns 
 */
function format(value) {
    //datetime是拿到的时间戳
    let date = new Date(value);
    let year = date.getFullYear(),
    month = ("0" + (date.getMonth() + 1)).slice(-2),
    sdate = ("0" + date.getDate()).slice(-2),
    hour = ("0" + date.getHours()).slice(-2),
    minute = ("0" + date.getMinutes()).slice(-2),
    second = ("0" + date.getSeconds()).slice(-2);
    // 拼接
    return year + "-"+ month +"-"+ sdate +" "+ hour +":"+ minute +":" + second;
}