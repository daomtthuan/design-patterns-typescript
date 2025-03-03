import { CarFactory } from './CarFactory.js';
import { PlaneFactory } from './PlaneFactory.js';

const carFactory = new CarFactory();
const planeFactory = new PlaneFactory();

const car1 = carFactory.create('Car 1', 300);
console.log(car1, '\n');

const car2 = carFactory.create('Car 2', 90);
console.log(car2, '\n');

const plane1 = planeFactory.create('Plane 1', 100);
console.log(plane1, '\n');

const plane2 = planeFactory.create('Plane 2', 1000);
console.log(plane2, '\n');
