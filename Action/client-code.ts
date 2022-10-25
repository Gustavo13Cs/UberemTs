import { EnterpriseCreateVeicleCustomerfactory } from "./factories/enterprise-customer-vehcle-factory";
import { individualCreateVeicleCustomerfactory } from "./factories/individual-customer-vehicle-factory";

const enterpriseFactory = new EnterpriseCreateVeicleCustomerfactory();
const individualFactory = new individualCreateVeicleCustomerfactory();

const car1 = enterpriseFactory.createVehicle('Fusca','João');
const car2 = individualFactory.createVehicle('Celta', 'Helena');

car1.pickup();
car2.pickup();