import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './Components/about-me/about-me.component'; 
import { ContactsComponent } from './Components/contacts/contacts.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { PriceComponent } from './Components/price/price.component';
import { ExampleComponent } from './example/example.component';

const routes: Routes = [
  {
    path: '',
    component: AboutMeComponent
  },


  {
    path: 'contacts',
    component: ContactsComponent
  },

  {
    path: 'portfolio',
    component: PortfolioComponent
  },

  {
    path: 'price',
    component: PriceComponent
  },

  {
    path: 'example',
    component: ExampleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
