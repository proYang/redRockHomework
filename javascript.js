// 1. 创建一个Person类, Person类的对象包含以下功能:
function Person(name) {
	this.name = name;
	Person.prototype.count++;
};
Person.prototype = {
	constructor: Person,
	toString : function() {
		return this.name;
	},
	count : 0
}
var ling = new Person('ling');
var long = new Person('long');




// 2. 创建一个复数(Complex)类, 有以下实例方法
function Complex(n1,n2){
	if (!isNaN(n1)&& !isNaN(n2)&& n1!==Infinity&& n2!==Infinity) {
		this.a = n1;
		this.b = n2;
	} else {
		this.a = 0;
		this.b = 0;
	}
}
Complex.prototype.mul = function (num) {
	//乘法
	var temp = new Complex();
	temp.a = this.a * num.a;
	temp.b = this.b * num.b;
	return temp;
}
Complex.prototype.add = function (num) {
	//加法
	var temp = new Complex();
	temp.a = this.a + num.a;
	temp.b = this.b + num.b;
	return temp;
}
Complex.prototype.mag = function () {
	//求模
	var temp =Math.sqrt(this.a*this.a+this.b*this.b)
	return temp;
}
Complex.prototype.neg = function () {
	//取反(共轭复数)
	var temp = new Complex();
	temp.a = this.a;
	temp.b = -this.b;
	return temp;
}
Complex.prototype.equal = function (num) {
	//相等
	if (this.a == num.a && this.b == num.b) {
		return true;
	} else {
		return false;
	}
}
Complex.prototype.toString = function () {
	//返回人类能读懂的格式
	return this.a+"+( "+this.b+")i";
}
var num1 = new Complex(1, -1);
var num2 = new Complex(4, -5);