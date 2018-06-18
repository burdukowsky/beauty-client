import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarModule} from 'ng-sidebar';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {NgHttpLoaderModule} from 'ng-http-loader';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

import {MainComponent} from './main/main.component';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {AboutComponent} from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    FontAwesomeModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    HttpClientModule,
    NgHttpLoaderModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
