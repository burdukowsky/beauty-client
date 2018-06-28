import {Component, OnInit} from '@angular/core';
import {faBuilding, faUsers, faUserFriends, faUserTie} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public faBuilding = faBuilding;
  public faUsers = faUsers;
  public faUserFriends = faUserFriends;
  public faUserTie = faUserTie;

  constructor() {
  }

  ngOnInit() {
  }

}
