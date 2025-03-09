import { CarBuilder } from './builders/CarBuilder.js';

const car1 = new CarBuilder().setName('Car 1').build();
car1.run();
console.log(car1, '\n');

const car2 = new CarBuilder().setName('Car 2').setEngine().build();
car2.run();
console.log(car2, '\n');
