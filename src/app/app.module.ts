import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarModule} from 'ng-sidebar';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {RatingModule} from 'ngx-bootstrap/rating';
import {ModalModule} from 'ngx-bootstrap';
import {NgHttpLoaderModule} from 'ng-http-loader';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {MainComponent} from './main/main.component';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {AboutComponent} from './about/about.component';
import {CompanyComponent} from './company/company.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    FontAwesomeModule,
    BsDropdownModule.forRoot(),
    RatingModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    HttpClientModule,
    NgHttpLoaderModule,
    InfiniteScrollModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CompanyComponent]
})
export class AppModule {
}
