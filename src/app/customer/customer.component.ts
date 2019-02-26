import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as Model from '../model';
import { SessionService } from '../services/session.service';
import { BasicFormComponent } from '../../general/basic-form.component';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent extends BasicFormComponent<Model.Customer> implements OnInit {

  generalFormGroup: FormGroup
  addressFormGroup: FormGroup
  formGroup: FormGroup

  constructor(private fb: FormBuilder, customerSvc: CustomerService, sessionSvc: SessionService, router: Router, route: ActivatedRoute) {
       
    super(Model.Customer, customerSvc, sessionSvc, router, route)

    let cust = new Model.Customer()
    console.log(cust)

  }

  ngOnInit() {
    this.createFormGroup()
    this.processParameters()
  }

  createFormGroup() {
    this.generalFormGroup = this.fb.group({
      name: ['', Validators.required],
      info: ['']
    })
    this.addressFormGroup = this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required]
    })

    this.formGroup = this.fb.group({
      general: this.generalFormGroup,
      address: this.addressFormGroup
    })

  }



}
