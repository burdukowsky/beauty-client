import {CompanyType} from './company-type.enum';
import {Service} from './service';

export interface Company {
  id: number;
  name: string;
  description: string;
  companyType: CompanyType;
  services: Array<Service>;
}
