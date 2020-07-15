import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'offers',
      loadChildren: () => import('../offers/offers.module')
        .then(m => m.OffersModule),
    },
    {
      path: '',
      redirectTo: 'offers/create-offer',
      pathMatch: 'full',
    },
    {
      path: '**',
      redirectTo: 'offers/create-offer',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
