class Throttle {
	constructor() {
		this.t = null
		this.trigger_time = null
	}

	static getInstance() {
		if (!Throttle.instance) {
			Throttle.instance = new Throttle()
		}
		return Throttle.instance
	}
}

export default Throttle.getInstance()