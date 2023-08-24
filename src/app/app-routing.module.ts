import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABOUTComponent } from './about/about.component';
import { HOMEComponent } from './home/home.component';
import { DONATEComponent } from './donate/donate.component';
import { NEWSComponent } from './news/news.component';
import { CONTACTUSComponent } from './contactus/contactus.component';
import { OURMISSIONComponent } from './ourmission/ourmission.component';

const routes: Routes = [
  {path:'HOME',component: HOMEComponent},
  {path:'ABOUT',component: ABOUTComponent},
  {path:'DONATE',component: DONATEComponent},
  {path:'NEWS',component: NEWSComponent},
  {path:'CONTACTUS',component: CONTACTUSComponent},
  {path:'OURMISSION',component: OURMISSIONComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
