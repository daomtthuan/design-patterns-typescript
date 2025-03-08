import { CarFactory } from './factories/CarFactory.js';
import { PlaneFactory } from './factories/PlaneFactory.js';

const carFactory = new CarFactory();

const car = carFactory.create('Car 1', 300);
console.log(car, '\n');

// --------------------------

const planeFactory = new PlaneFactory();

const plane = planeFactory.create('Plane 2', 1000);
console.log(plane, '\n');
