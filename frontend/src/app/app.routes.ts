import { Routes } from '@angular/router';
import { AppComponent } from './app';
import { TreatmentList } from './components/treatment-list/treatment-list';
import { AddTreatment } from './components/add-treatment/add-treatment';
import { Branches } from './components/branches/branches';
import { Appointments } from './components/appointments/appointments';
import { Home } from './components/home/home';
import { SpecialOffer } from './components/special-offer/special-offer';
// כאן בהמשך נייבא את הקומפוננטות הנוספות שתצרי (כמו סניפים או קביעת תור)

export const routes: Routes = [
  { path: '', component: Home }, // דף הבית
  { path: 'treatments', component: TreatmentList }, 
  { path: 'add-treatment', component: AddTreatment },
  { path: 'appointments', component: Appointments },
  { path: 'branches', component: Branches }
];