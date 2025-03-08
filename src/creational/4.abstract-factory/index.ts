import { CarFactory } from './factories/CarFactory.js';
import { MotorcycleFactory } from './factories/MotorcycleFactory.js';

const carFactory = new CarFactory();

const car1 = carFactory.createElectricVehicle('Car 1');
console.log(car1, '\n');

const car2 = carFactory.createGasolineVehicle('Car 2');
console.log(car2, '\n');

// --------------------------

const motorcycleFactory = new MotorcycleFactory();

const motorcycle1 = motorcycleFactory.createElectricVehicle('Motorcycle 1');
console.log(motorcycle1, '\n');

const motorcycle2 = motorcycleFactory.createGasolineVehicle('Motorcycle 2');
console.log(motorcycle2, '\n');
