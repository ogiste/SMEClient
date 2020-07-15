import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {OffersComponent} from './offers.component';
import {CreateOfferComponent} from './create-offer/create-offer.component';

const routes: Routes = [
  { path: '', component: OffersComponent},
  { path: 'create-offer', component: CreateOfferComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffersRoutingModule { }
