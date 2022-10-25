import { EnterpriseCreateVeicleCustomerfactory } from "./factories/enterprise-customer-vehcle-factory";
import { individualCreateVeicleCustomerfactory } from "./factories/individual-customer-vehicle-factory";

const enterpriseFactory = new EnterpriseCreateVeicleCustomerfactory();
const individualFactory = new individualCreateVeicleCustomerfactory();

const car1 = enterpriseFactory.createVehicle('Fusca','Reginaldo');
const car2 = individualFactory.createVehicle('Celta', 'Kauan');

car1.pickup();
car2.pickup();