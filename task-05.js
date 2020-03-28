class Car {
  constructor(Car) {
  
    this.maxSpeed = Car.maxSpeed;
    this.speed = Car.speed;
    this.isOn = Car.isOn ;
    this.distance = Car.distance;
    this.price = Car.price;

  }

  static getSpecs(car) {
    console.log(car);
  }

  get turnOn() {
    return this.price;
  }

  set turnOn(price) {
    this.price = 0;
  }

  turnOn() {
    this.isOn = true;
    this.speed = 0;
    this.distance = 0;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value;
    }
  }

  decelerate(value) {
    if (this.speed - value !== 0) {
    this.speed -= value; 
    }
  }

  drive(hours) {
    this.distance += hours * this.speed;
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price); 
mustang.price = 4000;
console.log(mustang.price); 