import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HOMEComponent } from './home/home.component';
import { ABOUTComponent } from './about/about.component';
import { DONATEComponent } from './donate/donate.component';
import { NEWSComponent } from './news/news.component';
import { CONTACTUSComponent } from './contactus/contactus.component';
import { OURMISSIONComponent } from './ourmission/ourmission.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HOMEComponent,
    ABOUTComponent,
    DONATEComponent,
    NEWSComponent,
    CONTACTUSComponent,
    OURMISSIONComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
