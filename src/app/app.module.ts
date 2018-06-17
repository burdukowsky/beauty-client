import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarModule} from 'ng-sidebar';
import {MainComponent} from './main/main.component';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {AboutComponent} from './about/about.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

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
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
