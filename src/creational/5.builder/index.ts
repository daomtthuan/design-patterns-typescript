import { CarBuilder } from './builders/CarBuilder.js';
import { Engine } from './objects/Engine.js';

const car1 = new CarBuilder().setName('Car 1').build();
console.log(car1);
car1.run();

console.log();

const car2 = new CarBuilder().setName('Car 2').setEngine(new Engine(100, 300)).build();
console.log(car2);
car2.run();
