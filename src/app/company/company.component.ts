import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {faTimes, faClock, faPhone, faMapMarkerAlt, faGlobe, faUserCircle} from '@fortawesome/free-solid-svg-icons';

import {Company} from './company';
import {globals} from '../globals';

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

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit() {
  }

}
