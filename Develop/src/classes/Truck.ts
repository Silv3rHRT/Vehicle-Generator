// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// The Truck class extends the Vehicle class and implements the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // Declare properties of the Truck class
  towingCapacity: number;
  wheels: Wheel[];

  // constructor that accepts the properties of the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number,
  ) {
    // Call the constructor of the parent class, Vehicle
    super(vin, color, make, model, year, weight, topSpeed);
    
    //initialize the truck-specific properties
    this.towingCapacity= towingCapacity;

    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
    // Override the printDetails method from the Vehicle class
    override printDetails(): void {
    // Call the printDetails method of the parent class, Vehicle
    super.printDetails();

    // Print details of the Truck class
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
    
    // Print details of the wheels
    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
    console.log(
      `Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`
    );
    console.log(
      `Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`
    );
  }

  tow(vehicle: Truck | Motorbike | Car): void {
    const vehicleMake = vehicle.make;
    const vehicleModel = vehicle.model;

    if (vehicle.weight <= this.towingCapacity) {
      console.log(`Truck ${this.make} ${this.model} is towing ${vehicleMake} ${vehicleModel}.`);
    } else {
      console.log(`Truck ${this.make} ${this.model} cannot tow ${vehicleMake} ${vehicleModel} because it exceeds the towing capacity.`);
      
    }
  }
}

// Export the Truck class as the default export
export default Truck;
