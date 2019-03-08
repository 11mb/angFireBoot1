import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'

import { Router, ActivatedRoute } from '@angular/router'
import * as Model from '../model'
import { SessionService } from '../services/session.service'
import { BasicFormComponent, AngularFormMode } from '../../general/basic-form.component'
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
  constructor(controlsDemoSvc: ControlsDemoService, sessionSvc: SessionService, router: Router, route: ActivatedRoute, fb: FormBuilder) {
    super(AngularFormMode.Reactive, Model.ControlsDemo, controlsDemoSvc, sessionSvc, router, route, fb)

  }

  ngOnInit() {
    this.processParameters()
  }

  /** will be called automatically if formMode AngularFormMode.Reactive (see above super(AngularFormMode.___) */
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
