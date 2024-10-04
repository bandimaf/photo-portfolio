import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeComponent } from './Components/about-me/about-me.component'; 
import { ContactsComponent } from './Components/contacts/contacts.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { PriceComponent } from './Components/price/price.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { ExampleComponent } from './example/example.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutMeComponent,
    PortfolioComponent,
    PriceComponent,
    ContactsComponent,
    ExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
