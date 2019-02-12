import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import * as Model from '../model';
import { AgGridNg2 } from 'ag-grid-angular';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;

  columnDefs = [
    { headerName: 'Name', field: 'name', sortable: true, filter: true, checkboxSelection: true },
    { headerName: 'Description', field: 'description', sortable: true, filter: true },
    { headerName: 'Stock', field: 'stock', sortable: true }
  ]
  
  products$: Observable<Model.Product[]>
  products: Model.Product[]
  constructor(private route: ActivatedRoute, private router: Router, private productSvc: ProductService) { }
  ngOnInit() {
    this.products$ = this.productSvc.getAll$()
    this.products$.subscribe(products => {
      this.products = products
    })
  }
  getSelectedRows() {
    let rows = this.agGrid.api.getSelectedRows()
    console.log(rows)
    if (rows.length > 0) {
      let id = rows[0].id
      this.router.navigate(['/product/' + id])
    }
  }
}