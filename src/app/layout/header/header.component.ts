import {Component, Input, OnInit} from '@angular/core';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() toggleSidebarCallback: Function;
  faGlobe = faGlobe;

  constructor() {
  }

  ngOnInit() {
  }

  public toggleSidebar(): void {
    this.toggleSidebarCallback();
  }

}
