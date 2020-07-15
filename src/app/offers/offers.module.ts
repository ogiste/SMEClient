import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OffersRoutingModule} from './offers-routing.module';
import {OffersComponent} from './offers.component';
import {CreateOfferComponent} from './create-offer/create-offer.component';
import {ViewOffersComponent} from './view-offers/view-offers.component';
import {SingleOfferComponent} from './single-offer/single-offer.component';
import {NbButtonModule, NbCardModule, NbDatepickerModule, NbInputModule, NbRadioModule} from '@nebular/theme';
import {ReactiveFormsModule} from '@angular/forms';
import {Ng2SmartTableModule} from 'ng2-smart-table';


@NgModule({
  declarations: [OffersComponent, CreateOfferComponent, ViewOffersComponent, SingleOfferComponent],
  imports: [
    CommonModule,
    OffersRoutingModule,
    NbCardModule,
    NbRadioModule,
    NbInputModule,
    NbDatepickerModule,
    NbButtonModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
  ],
})
export class OffersModule { }
