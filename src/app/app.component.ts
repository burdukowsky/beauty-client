import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public opened = false;
  public theBoundToggleSidebar: Function;

  constructor(private router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      this.opened = false;
    });
  }

  ngOnInit() {
    this.theBoundToggleSidebar = this.toggleSidebar.bind(this);
  }

  public toggleSidebar() {
    this.opened = !this.opened;
  }
}
