import { Customer } from "../customer/customer";
import { individualCustomer } from "../customer/individual-customers";
import { IndividualCar } from "../vehicle/individual";
import { Vehicle } from "../vehicle/vehicle";

export class individualCreateVeicleCustomerfactory{
    createCustomer(customerName: string): Customer {
        return new individualCustomer(customerName);
    }
    createVehicle(vehicleName: string, customerName: string): Vehicle {
        const customer = this.createCustomer(customerName);
        return new IndividualCar(vehicleName, customer);
    }
}