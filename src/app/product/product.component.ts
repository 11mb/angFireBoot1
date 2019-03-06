import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as Model from '../model';
import { SessionService } from '../services/session.service';
import { BasicFormComponent } from '../../general/basic-form.component';
import { NgbDateStruct, NgbCalendar, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DateConverter } from 'src/general/date-helper';
import { NgbDateCustomParserFormatter } from '../../general/ngb-date-format'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [
    {provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter}
   ]
})

export class ProductComponent extends BasicFormComponent<Model.Product> implements OnInit {
  constructor(private fb: FormBuilder, productSvc: ProductService, sessionSvc: SessionService, router: Router, route: ActivatedRoute) {
    super(Model.Product, productSvc, sessionSvc, router, route)
  }
  ngOnInit() {
    this.createFormGroup()
    this.processParameters()
  }

  createFormGroup() {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      stock: [''],
      isAvailable: [''],
      password: [''],
      fromDate: ['']
    })
  }


  convertDbToUi(objDb: any): any {
    if (objDb.fromDate) objDb.fromDate = DateConverter.intToObject(objDb.fromDate)


    return objDb
  }

  convertUiToDb(objUi: any) : any {
    if (objUi.fromDate) objUi.fromDate = DateConverter.objectToInt(objUi.fromDate)

    return objUi
  }

}