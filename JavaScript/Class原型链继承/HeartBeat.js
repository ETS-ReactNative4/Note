class HeartBeat {

	constructor() {
		this.timer = null
		this.startPosition = 0
		this.playPosition = 0
		this.learnTime = 0
        this.upTimer = null
	}

	static getInstance() {
		if (!HeartBeat.instance) {
			HeartBeat.instance = new HeartBeat()
		}
		return HeartBeat.instance
	}

	initTimer(handler) {
		this.timer = setInterval(() => {
			handler()
		}, 1000)
	}

    updateTimer() {
        this.upTimer = setInterval(() => {
            this.playPosition += 1
        }, 500)
    }

	clearTimer() {
		this.timer = null
	}
}

// export default HeartBeat.getInstance()

const HB = HeartBeat.getInstance()

// 上报定时器
HB.initTimer(doSomething)

// 播放位置更新定时器
HB.updateTimer()

function doSomething() {
    console.log(`doSomething: startPosition ${HB.startPosition} playPosition ${HB.playPosition}`)
    console.log('upload...')
    HB.startPosition = HB.playPosition
}

const HB1 = HeartBeat.getInstance()
setInterval(() => {
    console.log('HB1', HB1.playPosition)
}, 2000)