import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {faTimes, faClock, faPhone, faMapMarkerAlt, faGlobe, faUserCircle} from '@fortawesome/free-solid-svg-icons';

import {Company} from './company';
import {globals} from '../globals';
import {CompanyService} from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  public faTimes = faTimes;
  public faClock = faClock;
  public faPhone = faPhone;
  public faMapMarkerAlt = faMapMarkerAlt;
  public faGlobe = faGlobe;
  public faUserCircle = faUserCircle;
  public company: Company = null;
  public imagePrefix = globals.imagePrefix;
  public isServicesCollapsed = true;
  public loadServicesError = false;

  constructor(public bsModalRef: BsModalRef, private companyService: CompanyService) {
  }

  ngOnInit() {
    this.isServicesCollapsed = true;
    this.loadServicesError = false;
  }

  public onServicesCollapseButtonClick() {
    if (this.isServicesCollapsed && this.company.services == null) {
      this.getServices();
    } else {
      this.isServicesCollapsed = !this.isServicesCollapsed;
    }
  }

  private getServices(): void {
    this.loadServicesError = false;
    this.companyService.getServicesByCompanyId(this.company.id).subscribe(services => {
      this.company.services = services;
      this.isServicesCollapsed = false;
    }, error => {
      console.error(error);
      this.loadServicesError = true;
    });
  }

}
