import { CarFactory } from './factories/CarFactory.js';
import { MotorcycleFactory } from './factories/MotorcycleFactory.js';

const carFactory = new CarFactory();

const car1 = carFactory.createElectricVehicle('Car 1');
car1.charge();
console.log(car1);

console.log();

const car2 = carFactory.createGasolineVehicle('Car 2');
car2.refuel();
console.log(car2);

console.log();
// --------------------------

const motorcycleFactory = new MotorcycleFactory();

const motorcycle1 = motorcycleFactory.createElectricVehicle('Motorcycle 1');
motorcycle1.charge();
console.log(motorcycle1);

console.log();

const motorcycle2 = motorcycleFactory.createGasolineVehicle('Motorcycle 2');
motorcycle2.refuel();
console.log(motorcycle2);
