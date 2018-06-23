import {Component, OnInit} from '@angular/core';
import {faFrown, faSearch} from '@fortawesome/free-solid-svg-icons';

import {CompanyService} from '../company/company.service';
import {Company} from '../company/company';
import {Category} from '../company/category';
import {CompanyType} from '../company/company-type.enum';
import {CompanySortField} from '../company/company-sort-field.enum';
import {SortDirection} from '../company/sort-direction.enum';

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
  public limit = 10;
  public formSubmitted = defaultFormSubmitted;
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

  public getCompanies(): void {
    this.companyService.getCompaniesByCategoryIds(
      this.currentPage,
      this.limit,
      CompanySortField.Rating,
      SortDirection.Desc,
      this.chosenCompanyType,
      this.chosenCategoryIds).subscribe(companies => {
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

  get categoriesChosen(): boolean {
    return this.chosenCategoryIds.length > 0;
  }

}
