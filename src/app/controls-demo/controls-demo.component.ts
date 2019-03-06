import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'

import { Router, ActivatedRoute } from '@angular/router'
import * as Model from '../model'
import { SessionService } from '../services/session.service'
import { BasicFormComponent } from '../../general/basic-form.component'
import { NgbDateStruct, NgbCalendar, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap'
import { DateConverter } from 'src/general/date-helper'
import { NgbDateCustomParserFormatter } from '../../general/ngb-date-format'
import { ControlsDemoService } from '../services/controls-demo.service';

@Component({
  selector: 'app-controls-demo',
  templateUrl: './controls-demo.component.html',
  styleUrls: ['./controls-demo.component.scss'],
  providers: [
    { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter }
  ]
})


export class ControlsDemoComponent extends BasicFormComponent<Model.ControlsDemo> implements OnInit {
  constructor(private fb: FormBuilder, controlsDemoSvc: ControlsDemoService, sessionSvc: SessionService, router: Router, route: ActivatedRoute) {
    super(Model.ControlsDemo, controlsDemoSvc, sessionSvc, router, route)
  }

  ngOnInit() {
    this.createFormGroup()
    this.processParameters()
  }


  createFormGroup() {
    this.formGroup = this.fb.group({
      isChecked: [''],
      date: [''],
      name: [''],
      password: [''],
      description: [''],
      number: [''],
      singleSelect: [''],
      multiSelect: [''],
      radio: ['']
    })
  }

  convertDbToUi(objDb: any): any {
    if (objDb.date) objDb.date = DateConverter.intToObject(objDb.date)


    return objDb
  }

  convertUiToDb(objUi: any): any {
    if (objUi.date) objUi.date = DateConverter.objectToInt(objUi.date)

    return objUi
  }

}
