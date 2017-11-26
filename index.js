

var Car = function(brand, model, year) {
	this.brand = brand;
	this.model = model;
	this.year = year;
	this.engineState = 'stopped';
	this.messageToDriver = '';
};

let aCar = new Car("Volks Wogen","Polo 6","2017");
console.log('aCar : ', aCar);

//prepare array
var myArray = ['a', 'b', 'c', 'd','e','f','h'];
console.log("item to delete : ",myArray[2]);

// removes 1 element from index 2
var removed = myArray.splice(2, 1);
console.log("deleted item : ", removed);