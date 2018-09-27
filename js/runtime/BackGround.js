import {Sprite} from '../base/Sprite.js';

// 背景
export class BackGround extends Sprite {
	constructor(ctx, image) {
		super(ctx, image
			0,0,
			image.wisth, image.height,
			0,0,
			window.innerWidth, window.innerHeight
		);
	}

}