import {DataStore} from './base/DataStore.js'

// 导演类，控制游戏的逻辑
export class Director {
	constructor() {
		this.dataStore = DataStore.getInstance();
		this.moveSpeed = 2;
	}

	static getInstance() {
		if (!Director.instance) {
			Director.instance = new Director()
		}

		return Director.instance
	}

	run() {
		this.dataStore.get('background').draw();
		this.dataStore.get('land').draw();
		let timer = requestAnimationFrame(() => this.run());
		this.dataStore.put('timer', timer);
		// cancelAnimationFrame(this.dataStore.get('timer'));
	}
}