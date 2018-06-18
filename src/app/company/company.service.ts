import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from '../../environments/environment';
import {Company} from './company';
import {CompanyType} from './company-type.enum';
import {CompanySortField} from './company-sort-field.enum';
import {SortDirection} from './sort-direction.enum';
import {Category} from './category';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) {
  }

  public getCompaniesByCategoryIds(page: number,
                                   limit: number,
                                   companySortField: CompanySortField,
                                   sortDirection: SortDirection,
                                   companyType: CompanyType,
                                   ids: Array<number>): Observable<Array<Company>> {
    const params = new HttpParams()
      .append('page', page == null ? '' : page.toString())
      .append('limit', limit == null ? '' : limit.toString())
      .append('sort', companySortField == null ? '' : companySortField)
      .append('sortDirection', sortDirection == null ? '' : sortDirection)
      .append('type', companyType == null ? '' : companyType)
      .append('ids', ids == null ? '' : ids.join());

    return this.http.get<any>(`${environment.apiEndpoint}/public/companies-by-category-ids`, {params: params})
      .pipe(map(response => response.data));
  }

  public getCompaniesByServiceIds(page: number,
                                  limit: number,
                                  companySortField: CompanySortField,
                                  sortDirection: SortDirection,
                                  companyType: CompanyType,
                                  ids: Array<number>): Observable<Array<Company>> {
    const params = new HttpParams()
      .append('page', page == null ? '' : page.toString())
      .append('limit', limit == null ? '' : limit.toString())
      .append('sort', companySortField == null ? '' : companySortField)
      .append('sortDirection', sortDirection == null ? '' : sortDirection)
      .append('type', companyType == null ? '' : companyType)
      .append('ids', ids == null ? '' : ids.join());

    return this.http.get<any>(`${environment.apiEndpoint}/public/companies-by-service-ids`, {params: params})
      .pipe(map(response => response.data));
  }

  public getCategories(): Observable<Array<Category>> {
    const params = new HttpParams()
      .append('limit', '1000')
      .append('sort', 'name');

    return this.http.get<any>(`${environment.apiEndpoint}/categories`, {params: params})
      .pipe(map(response => response._embedded.categories));
  }

  public getCategoriesWithServices(): Observable<Array<Category>> {
    return this.http.get<Array<Category>>(`${environment.apiEndpoint}/categories-with-services`);
  }
}
