import { Component, OnInit } from '@angular/core';
import * as Model from '../model';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { BasicGridComponent } from 'src/general/basic-grid.component';



@Component({
  selector: 'customer-grid',
  templateUrl: './customer-grid.component.html',
  styleUrls: ['./customer-grid.component.scss']
})
export class CustomerGridComponent extends BasicGridComponent<Model.Customer> implements OnInit {

  constructor(router: Router, customerSvc: CustomerService) {

    let columnDefs = [
      { headerName: 'Name', field: 'general.name', sortable: true, filter: true },
      { headerName: 'Info', field: 'general.info', sortable: true, filter: true },
      { headerName: 'Street', field: 'general.address.street', sortable: true, filter: true },
      { headerName: 'City', field: 'general.address.city', sortable: true, filter: true },
      { headerName: 'Country', field: 'general.address.country', sortable: true, filter: true }]

    super(columnDefs, router, customerSvc, '/customer')

  }

  ngOnInit() {
    this.getData() 

  }

}
