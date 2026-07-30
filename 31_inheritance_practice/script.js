function Car(name, model, year, color, type) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.type = type;
}

Car.prototype.start = function () {
    console.log(`${this.name} Started`);
};

Car.prototype.stop = function () {
    console.log(`${this.name} Stopped`);
};


function RaceCar(name, model, year, color, type) {
    Car.call(this, name, model, year, color, type);
}
RaceCar.prototype = Object.create(Car.prototype);
RaceCar.prototype.constructor = RaceCar;

RaceCar.prototype.modify = function () {
    console.log(`${this.name} has Nitro`);
};


function SUVCar(name, model, year, color, type) {
    Car.call(this, name, model, year, color, type);
}
SUVCar.prototype = Object.create(Car.prototype);
SUVCar.prototype.constructor = SUVCar;

SUVCar.prototype.modify = function () {
    console.log(`${this.name} has Luxury`);
};


function SedanCar(name, model, year, color, type) {
    Car.call(this, name, model, year, color, type);
}
SedanCar.prototype = Object.create(Car.prototype);
SedanCar.prototype.constructor = SedanCar;

SedanCar.prototype.modify = function () {
    console.log(`${this.name} has Reliability`);
};


const raceCar = new RaceCar("Ferrari", "SF90", 2024, "Red", "Sports");
const suvCar = new SUVCar("Range Rover", "Vogue", 2023, "Black", "SUV");
const sedanCar = new SedanCar("Toyota", "Camry", 2022, "White", "Sedan");

console.log("--- RaceCar ---");
console.log(raceCar);
raceCar.start();
raceCar.modify();
raceCar.stop();

console.log("\n--- SUVCar ---");
console.log(suvCar);
suvCar.start();
suvCar.modify();
suvCar.stop();

console.log("\n--- SedanCar ---");
console.log(sedanCar);
sedanCar.start();
sedanCar.modify();
sedanCar.stop();