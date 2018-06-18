import {Service} from './service';

export interface Category {
  id: number;
  name: string;
  description: string;
  services: Array<Service>;
}
