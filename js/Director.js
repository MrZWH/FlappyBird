import {DataStore} from './base/DataStore.js'

// 导演类，控制游戏的逻辑
export class Director {
	constructor() {
		this.dataStore = DataStore.getInstance();
	}

	static getInstance() {
		if (!Director.instance) {
			Director.instance = new Director()
		}

		return Director.instance
	}

	run() {
		const backgroundSprite = this.dataStore.get('background');
		backgroundSprite.draw();
	}
}