var sleep = function (time){
	return new Promise((resolve, reject) => {
		setTimeout(function(){
			resolve();
		},time);
	});
};

// for of
(async () => {
	let numbers = [1,2,3,4,5];

    for(var v of numbers){
		console.log(`当前是第${v}次等待..`);
    	await sleep(1000); // 正确, for循环的上下文还在async函数中   	
	}
})()
// 当前是第1次等待..
// 当前是第2次等待..
// 当前是第3次等待..
// 当前是第4次等待..
// 当前是第5次等待..


// for in
(async () => {
	let numbers = [1,2,3,4,5];

    for(var v in numbers){
		console.log(`当前是第${v}次等待..`);
    	await sleep(1000); // 正确, for循环的上下文还在async函数中   	
	}
})()
// 当前是第0次等待..
// 当前是第1次等待..
// 当前是第2次等待..
// 当前是第3次等待..
// 当前是第4次等待..


// for
(async () => {
	let numbers = [1,2,3,4,5];

    for(let i = 0; i < numbers.length;i ++){
		console.log(`当前是第${i}次等待..`);
    	await sleep(1000); // 正确, for循环的上下文还在async函数中   	
	}
})()

// 当前是第0次等待..
// 当前是第1次等待..
// 当前是第2次等待..
// 当前是第3次等待..
// 当前是第4次等待..


/** 上边的方法都是每隔一秒输出一次，下面的forEach是瞬间输出5条 */
(function run() {
	let numbers = [1,2,3,4,5];

	numbers.forEach(async (v) => {
		console.log(`当前是第${v}次等待..`);
    	await sleep(1000);
	})
})()
// 当前是第0次等待..
// 当前是第1次等待..
// 当前是第2次等待..
// 当前是第3次等待..
// 当前是第4次等待..
