import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public activeItemClasses = ['list-group-item-secondary', 'font-weight-bold', 'text-violet-darken-20'];

  constructor() { }

  ngOnInit() {
  }

}
