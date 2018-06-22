import {Component, Input, OnInit} from '@angular/core';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {globals} from '../../globals';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() toggleSidebarCallback: Function;
  faGlobe = faGlobe;

  languagesNames = {
    [globals.languageCodes.ru]: 'Русский',
    [globals.languageCodes.en]: 'English'
  };

  constructor(public translate: TranslateService) {
  }

  ngOnInit() {
  }

  public toggleSidebar(): void {
    this.toggleSidebarCallback();
  }

  public onLanguageSelect(value) {
    localStorage.setItem(globals.localStorageKeys.language, value);
    this.translate.use(value);
  }

}
