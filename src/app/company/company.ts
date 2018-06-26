import {CompanyType} from './company-type.enum';
import {Service} from './service';

export interface Company {
  id: number;
  name: string;
  description: string;
  timetable: string;
  site: string;
  phone: string;
  address: string;
  rating: number;
  image: string;
  companyType: CompanyType;
  services: Array<Service>;
}
