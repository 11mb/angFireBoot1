import { Component, OnInit } from '@angular/core';
import * as Model from '../model';
import { Router } from '@angular/router';
import { BasicGridComponent } from 'src/general/basic-grid.component';
import { ControlsDemoService } from '../services/controls-demo.service';


@Component({
  selector: 'controls-demo-grid',
  templateUrl: './controls-demo-grid.component.html',
  styleUrls: ['./controls-demo-grid.component.scss']
})
export class ControlsDemoGridComponent extends BasicGridComponent<Model.ControlsDemo> implements OnInit {

  constructor(router: Router, controlsDemoSvc: ControlsDemoService) {

    let columnDefs = [
      { headerName: 'Is checked', field: 'isChecked', sortable: true, filter: true },
      { headerName: 'Date', field: 'date', sortable: true, filter: true },
      { headerName: 'Name', field: 'name', sortable: true, filter: true },
      { headerName: 'Password', field: 'password', sortable: true, filter: true },
      { headerName: 'Description', field: 'description', sortable: true, filter: true },
      { headerName: 'Number', field: 'number', sortable: true, filter: true },
      { headerName: 'Single select', field: 'singleSelect', sortable: true, filter: true },
      { headerName: 'Multi select', field: 'multiSelect', sortable: true, filter: true },
      { headerName: 'Radio group', field: 'radio', sortable: true, filter: true }]
     
    super(columnDefs, router, controlsDemoSvc, '/controls-demo')
  }

  ngOnInit() {
    this.getData() 
  }

}
