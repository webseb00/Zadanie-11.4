function Phone(brand, price, color) {
  this.brand = brand;
  this.price = price;
  this.color = color;
}

Phone.prototype.printInfo = function() {
  console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + '.');
}

var samsungGalaxyS6 = new Phone('Samsung', 1200, 'white');
var iPhone6 = new Phone('Apple', 1800, 'silver');
var onePlusOne = new Phone('One Plus', 800, 'blue');

samsungGalaxyS6.printInfo();
iPhone6.printInfo();
onePlusOne.printInfo();