import {DataStore} from './base/DataStore.js'
import {UpPencil} from './runtime/UpPencil.js'
import {DownPencil} from './runtime/DownPencil.js'

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

	createPencil() {
		const minTop = window.innerHeight / 8;
		const maxTop = window.innerHeight / 2;
		const top = minTop + Math.random() * (maxTop - minTop);
		this.dataStore.get('pencils').push(new UpPencil(top));
		this.dataStore.get('pencils').push(new DownPencil(top));
	}

	run() {
		this.dataStore.get('background').draw();
		this.dataStore.get('land').draw();

		this.dataStore.get('pencils').forEach(function(value, index, array) {
			value.draw();
		})

		let timer = requestAnimationFrame(() => this.run());
		this.dataStore.put('timer', timer);
		// cancelAnimationFrame(this.dataStore.get('timer'));
	}
}