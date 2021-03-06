import {Component, OnInit} from '@angular/core';
import {SmeApiService} from '../../sme-services/sme-api.service';
import {LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'ngx-view-offers',
  templateUrl: './view-offers.component.html',
  styleUrls: ['./view-offers.component.scss'],
})
export class ViewOffersComponent implements OnInit {
  offers;
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      offer_name: {
        title: 'Offer Name',
        type: 'string',
      },
      offer_description: {
        title: 'Offer Description',
        type: 'string',
      },
      initial_cost: {
        title: 'Price',
        type: 'string',
        editable: false,
      },
      discount: {
        title: 'Discount',
        type: 'string',
        editable: false,
      },
      current_price: {
        title: 'Discounted Price (Ksh)',
        type: 'string',
        editable: false,
      },
      whatsapp: {
        title: 'Discount',
        type: 'string',
        editable: false,
      },
      expiry_date: {
        title: 'Expiry date',
        type: 'string',
        editable: false,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private smeApiService: SmeApiService) {
    this.initTableData();
  }

  ngOnInit(): void {
    const storageKey = 'offers';
    const storedOffers = this.getLocalStorage(storageKey);
    if (Array.isArray(storedOffers)) {
      console.log(storedOffers);
      this.offers = this.smeApiService.offers = storedOffers;
      this.initTableData();
    }
  }

  initTableData() {
    this.offers = this.smeApiService.offers.map((offer, index) => {
      if (offer.discount > 0 && offer.discount < 1) {
        offer.current_price = offer.initial_cost * (1 - offer.discount);
      }
      if (offer.discount > 0 && offer.discount > 1 && offer.discount < 100) {
        offer.current_price = offer.initial_cost * (1 - (offer.discount / 100));
      }
      if (offer.discount < 0 || offer.discount > 100) {
        offer.current_price = offer.initial_cost;
      }
      offer.expiry_date = new Date(offer.expiry_date);
      return {...offer, id: index};
    });
    this.source.load(this.offers);
  }

  getLocalStorage(key) {
    const offers = JSON.parse(localStorage.getItem(key)) || {offers: []};
    // @ts-ignore
    console.log(offers.offers);
    return offers.offers;
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
