import {Component, OnInit} from '@angular/core';
import {faFrown, faSearch} from '@fortawesome/free-solid-svg-icons';

import {CompanyService} from '../company/company.service';
import {Company} from '../company/company';
import {Category} from '../company/category';
import {CompanyType} from '../company/company-type.enum';
import {CompanySortField} from '../company/company-sort-field.enum';
import {SortDirection} from '../company/sort-direction.enum';
import {CompaniesSearchParams} from '../company/companies-search-params';

const defaultCurrentPage = 0;
const defaultCompanies: Array<Company> = [];
const defaultFormSubmitted = false;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public faFrown = faFrown;
  public faSearch = faSearch;
  public loadErrorMessage = false;
  public companyTypes = CompanyType;
  public companyTypeKeys = Object.keys(this.companyTypes);
  public chosenCompanyType: CompanyType = null;
  public chosenCategoryIds: Array<number> = [];
  public companies: Array<Company> = defaultCompanies;
  public categories: Array<Category>;
  public currentPage = defaultCurrentPage;
  public limit = 50;
  public formSubmitted = defaultFormSubmitted;
  public advancedSearch = false;
  public servicesLoaded = false;
  public chosenServiceIds: Array<number> = [];
  private listenScrollEvents = false;

  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.getCategories();
  }

  private getCategories(): void {
    this.companyService.getCategories().subscribe(categories => {
      this.categories = categories;
    }, error => {
      console.error(error);
      this.loadErrorMessage = true;
    });
  }

  public onCategoryCheck(categoryId: number): void {
    const index = this.chosenCategoryIds.indexOf(categoryId);
    if (index === -1) {
      this.chosenCategoryIds.push(categoryId);
    } else {
      this.chosenCategoryIds.splice(index, 1);
    }
  }

  public categoryChosen(categoryId: number): boolean {
    return this.chosenCategoryIds.indexOf(categoryId) !== -1;
  }

  public onSubmit(): void {
    this.formSubmitted = defaultFormSubmitted;
    this.currentPage = defaultCurrentPage;
    this.companies = defaultCompanies;
    this.getCompanies();
  }

  private getCompanies(): void {
    const searchParams: CompaniesSearchParams = {
      page: this.currentPage,
      limit: this.limit,
      companySortField: CompanySortField.Rating,
      sortDirection: SortDirection.Desc,
      companyType: this.chosenCompanyType,
      ids: this.advancedSearch ? this.chosenServiceIds : this.chosenCategoryIds
    };
    (this.advancedSearch ?
      this.companyService.getCompaniesByServiceIds(searchParams) :
      this.companyService.getCompaniesByCategoryIds(searchParams)).subscribe(companies => {
      this.formSubmitted = true;
      this.companies = this.companies.concat(companies);
      this.listenScrollEvents = companies.length >= this.limit;
      ++this.currentPage;
    }, error => {
      console.error(error);
      this.loadErrorMessage = true;
    });
  }

  public onScroll(): void {
    if (this.listenScrollEvents) {
      this.getCompanies();
    }
  }

  public toggleAdvancedSearch(): void {
    this.advancedSearch = !this.advancedSearch;
    if (!this.servicesLoaded) {
      this.getCategoriesWithServices();
    }
  }

  private getCategoriesWithServices(): void {
    this.companyService.getCategoriesWithServices().subscribe(categoriesWithServices => {
      this.servicesLoaded = true;
      this.categories = categoriesWithServices;
    }, error => {
      console.error(error);
      this.loadErrorMessage = true;
    });
  }

  public onServiceCheck(serviceId: number): void {
    const index = this.chosenServiceIds.indexOf(serviceId);
    if (index === -1) {
      this.chosenServiceIds.push(serviceId);
    } else {
      this.chosenServiceIds.splice(index, 1);
    }
  }

  public serviceChosen(serviceId: number): boolean {
    return this.chosenServiceIds.indexOf(serviceId) !== -1;
  }

  get searchReady(): boolean {
    if (this.advancedSearch) {
      return this.chosenServiceIds.length > 0;
    }
    return this.chosenCategoryIds.length > 0;
  }

}
