import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {filter} from 'rxjs/operators';

import {globals} from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public opened = false;
  public theBoundToggleSidebar: Function;

  constructor(private router: Router, public translate: TranslateService) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      this.opened = false;
    });

    const ruCode = globals.languageCodes.ru;
    const enCode = globals.languageCodes.en;
    const localStorageLanguageKey = globals.localStorageKeys.language;

    const defaultLangCode = ruCode;
    const languages = [ruCode, enCode];

    translate.addLangs(languages);
    translate.setDefaultLang(ruCode);

    const clientLang = localStorage.getItem(localStorageLanguageKey) || translate.getBrowserLang();
    const languageForUse = languages.includes(clientLang) ? clientLang : defaultLangCode;

    localStorage.setItem(localStorageLanguageKey, languageForUse);
    translate.use(languageForUse);
  }

  ngOnInit() {
    this.theBoundToggleSidebar = this.toggleSidebar.bind(this);
  }

  public toggleSidebar() {
    this.opened = !this.opened;
  }
}
