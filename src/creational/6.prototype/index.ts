import { Car } from './objects/Car.js';
import { Engine } from './objects/Engine.js';

const carPrototype = new Car('Car Prototype', new Engine(0, 0));
console.log('Prototype', carPrototype);

console.log();

// --------------------------

const car1 = carPrototype.clone();
car1.name = 'Car 1';
car1.engine.power = 50;
car1.engine.maxSpeed = 200;
console.log(car1);
car1.run();

console.log();

const car2 = carPrototype.clone();
car2.name = 'Car 2';
console.log(car2);
car2.run();
