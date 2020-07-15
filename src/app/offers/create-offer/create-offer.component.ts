import {Component, OnInit} from '@angular/core';
import {SmeApiService} from '../../sme-services/sme-api.service';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'ngx-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.scss'],
})
export class CreateOfferComponent implements OnInit {
  offer;
  offerForm;
  constructor(private fb: FormBuilder, private smeApiService: SmeApiService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.offerForm = this.fb.group({
      offer_name: ['', [Validators.required,
        Validators.minLength(2)]],
      offer_description: ['', [Validators.required,
        Validators.minLength(1)]],
      initial_cost: [0, [Validators.required,
        Validators.min(0)]],
      whatsapp: ['', [Validators.required,
        Validators.minLength(1)]],
      expiry_date: ['', [
        Validators.minLength(1)]],
      discount: [0, [Validators.min(0), Validators.max(1)]],
    });
  }
  createOffer() {
    const storageKey = 'offers';
    const storedOffers = this.getLocalStorage(storageKey);
    if (storedOffers) {
      console.log(storedOffers);
      // @ts-ignore
      this.smeApiService.offers = storedOffers;
    }
    this.smeApiService.offers.push(this.offerForm.value);
    localStorage.setItem(storageKey, JSON.stringify({offers: this.smeApiService.offers}));
    console.log(this.getLocalStorage((storageKey)));
    this.router.navigate([`/pages/offers/view-offers`]);
  }
  getLocalStorage(key) {
    const offers = JSON.parse(localStorage.getItem(key)) || {offers: []};
    // @ts-ignore
    console.log(offers.offers);
    return offers.offers;
  }



}
