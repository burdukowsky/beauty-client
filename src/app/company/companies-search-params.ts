import {CompanySortField} from './company-sort-field.enum';
import {SortDirection} from './sort-direction.enum';
import {CompanyType} from './company-type.enum';

export interface CompaniesSearchParams {
  page: number;
  limit: number;
  companySortField: CompanySortField;
  sortDirection: SortDirection;
  companyType: CompanyType;
  ids: Array<number>;
}
