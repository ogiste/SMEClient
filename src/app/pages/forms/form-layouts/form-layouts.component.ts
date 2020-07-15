import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {SmeApiService} from '../../../sme-services/sme-api.service';

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./form-layouts.component.scss'],
  templateUrl: './form-layouts.component.html',
})
export class FormLayoutsComponent implements OnInit {
  businessForm;
  constructor(private fb: FormBuilder, private smeApiService: SmeApiService) {
  }
  ngOnInit() {
    this.businessForm = this.fb.group({
      business_name: ['', [Validators.required,
        Validators.minLength(2)]],
      business_contact: ['', [Validators.required,
        Validators.minLength(10)]],
      business_email: ['', [Validators.required,
        Validators.minLength(1)]],
      location: ['', [Validators.required,
        Validators.minLength(1)]],
      website: ['', [
        Validators.minLength(1)]],
      company_registration_number: ['', []],
      KRA_pin: ['', []],
      whastapp: ['', [Validators.required,
        Validators.minLength(1)]],
      industry: ['', [Validators.minLength(2)]],
    });
  }
  handleFormSubmission(businessInfo) {
    this.smeApiService.createBusiness(businessInfo);
  }
  createNewBusiness() {
    if (this.businessForm.valid) {
      const businessInfo  = {...this.businessForm.value};
      this.handleFormSubmission(businessInfo);
    }
  }

}
