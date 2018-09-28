import {Sprite} from '../base/Sprite.js';

// 小鸟类
// 循环的渲染三只小鸟
export class Birds extends Sprite {
	constructor() {
		const image = Sprite.getImage('birds');
		super(image,
			0,0,
			image.width, image.height,
			0,0,
			image.width, image.height,
		);

		// 小鸟的三种状态需要一个数组去存储
		// 小鸟的宽是 34 ，上下边距是 10，小鸟的左右边距是 9.
		this.clippingX = [
			9,
			9 + 34 + 18,
			9+ 34 + 18 + 34 + 18
		];
		this.clippingY = [10, 10, 10];
		this.clippWidth = [34, 34, 34];
		this.clippHeight = [24, 24, 24];
		this.birdX = window.innerWidth / 4;
		this.birdsX = [this.birdX, this.birdX, this.birdX];
		this.birdY = window.innerHeight / 2;
		this.birdsY = [this.birdY, this.birdY, this.birdY];
		this.birdWidth = 34;
		this.birdsWidth = [this.birdWidth, this.birdWidth, this.birdWidth];
		this.birdHeight = 24;
		this.birdsHeight = [this.birdHeight, this.birdHeight, this.birdHeight];
		this.y = [this.birdY, this.birdY, this.birdY];
		this.index = 0;
		this.count = 0;
		this.time = 0;
	}

	draw() {
		// 切换三只小鸟的速度
		const speed = 0.2;
		this.count = this.count + speed;

		if (this.index >= 2) {
			this.count = 0;
		}

		// 减速器的作用
		this.index = Math.floor(this.count);

		super.draw(this.img,
			this.clippingX[this.index], this.clippingY[this.index],
			this.clippWidth[this.index], this.clippHeight[this.index],
			this.birdsX[this.index], this.birdsY[this.index],
			this.birdsWidth[this.index],
			this.birdsHeight[this.index]
		);
	}
}