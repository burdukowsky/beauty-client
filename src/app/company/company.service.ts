import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Company} from './company';
import {Category} from './category';
import {CompaniesSearchParams} from './companies-search-params';
import {Service} from './service';
import {AppConfig} from '../app-config.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient, private appConfig: AppConfig) {
  }

  public getCompaniesByCategoryIds(searchParams: CompaniesSearchParams): Observable<Array<Company>> {
    const params = new HttpParams()
      .append('page', searchParams.page == null ? '' : searchParams.page.toString())
      .append('limit', searchParams.limit == null ? '' : searchParams.limit.toString())
      .append('sort', searchParams.companySortField == null ? '' : searchParams.companySortField)
      .append('sortDirection', searchParams.sortDirection == null ? '' : searchParams.sortDirection)
      .append('type', searchParams.companyType == null ? '' : searchParams.companyType)
      .append('ids', searchParams.ids == null ? '' : searchParams.ids.join());

    return this.http.get<any>(`${this.appConfig.api}/public/companies-by-category-ids`, {params: params})
      .pipe(map(response => response.data));
  }

  public getCompaniesByServiceIds(searchParams: CompaniesSearchParams): Observable<Array<Company>> {
    const params = new HttpParams()
      .append('page', searchParams.page == null ? '' : searchParams.page.toString())
      .append('limit', searchParams.limit == null ? '' : searchParams.limit.toString())
      .append('sort', searchParams.companySortField == null ? '' : searchParams.companySortField)
      .append('sortDirection', searchParams.sortDirection == null ? '' : searchParams.sortDirection)
      .append('type', searchParams.companyType == null ? '' : searchParams.companyType)
      .append('ids', searchParams.ids == null ? '' : searchParams.ids.join());

    return this.http.get<any>(`${this.appConfig.api}/public/companies-by-service-ids`, {params: params})
      .pipe(map(response => response.data));
  }

  public getCategories(): Observable<Array<Category>> {
    const params = new HttpParams()
      .append('limit', '1000')
      .append('sort', 'name');

    return this.http.get<any>(`${this.appConfig.api}/categories`, {params: params})
      .pipe(map(response => response._embedded.categories));
  }

  public getCategoriesWithServices(): Observable<Array<Category>> {
    return this.http.get<Array<Category>>(`${this.appConfig.api}/categories-with-services`);
  }

  public getServicesByCompanyId(companyId: number): Observable<Array<Service>> {
    return this.http.get<any>(`${this.appConfig.api}/companies/${companyId}/services`)
      .pipe(map(response => response._embedded.services));
  }
}
