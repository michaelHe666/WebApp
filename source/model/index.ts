import { History } from 'cell-router/source';

import { Session } from './Session';
import { SuppliesRequirementModel } from './SuppliesRequirement';
import { LogisticsModel } from './Logistics';
import { HotelCanStayingModel } from './HotelCanStaying';
import { ClinicModel } from './Clinic';

export const history = new History();
export const session = new Session();
export const suppliesRequirement = new SuppliesRequirementModel();
export const logistics = new LogisticsModel();
export const hotelCanStaying = new HotelCanStayingModel();
export const clinic = new ClinicModel();

export * from './HTTPService';
export * from './GitService';
export * from './AMap';
export * from './SuppliesRequirement';
export * from './Logistics';
export * from './HotelCanStaying';
export * from './Clinic';