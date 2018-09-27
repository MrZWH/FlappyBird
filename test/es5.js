(function() {
	'use strict';

	// 函数声明
	// function Animal() {

	// }

	var Animal = function (name, age) {
		this.name = name;
		this.age = age;
	};
	Animal.prototype.say = function() {
		console.log(this.name + '' + this.age);
	};
	var cat = new Animal('小猫', 3);
	cat.say();

	// 寄生组合式继承
	// call apply
	var Cat = function(name, age) {
		Animal.apply(this, arguments);
	}

	Cat.prototype = Object.create(Animal.prototype);
	// 区分
	// Cat.prototype = new Animal()
	Cat.prototype.say = function() {
		console.log('这是子类的名字' + this.name);
	}

	var cat1 = new Cat('子猫', 3);
	cat1.say();
})();