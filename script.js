function Phone(brand, model, price, color, memory) {
  this.brand = brand;
  this.model = model;
  this.price = price;
  this.color = color;
  this.memory = memory;
}

Phone.prototype.printInfo = function() {
  console.log('The phone brand is ' + this.brand + this.model + ', color is ' + this.color + ' and the price is ' + this.price + '.');
}

Phone.prototype.printMem = function() {
	console.log(this.brand + ' ' + this.model + ' is equipped with ' + this.memory + ' of memory.');
}

var samsungGalaxyS6 = new Phone('Samsung', 'Galaxy S6', 1200, 'white', '124 GB');
var iPhone6 = new Phone('Apple', 'iPhone 6s Plus', 1800, 'silver', '64 GB');
var onePlusOne = new Phone('One Plus', 'One', 600, 'blue', '20 GB');

samsungGalaxyS6.printInfo();
samsungGalaxyS6.printMem();

iPhone6.printInfo();
iPhone6.printMem();

onePlusOne.printInfo();
onePlusOne.printMem();