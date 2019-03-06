import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerGridComponent } from './customer-grid/customer-grid.component';
import { ControlsDemoComponent } from './controls-demo/controls-demo.component';
import { ControlsDemoGridComponent } from './controls-demo-grid/controls-demo-grid.component';

const routes: Routes = [
  { path: 'product/:id', component: ProductComponent }, 
  { path: 'product-grid', component: ProductGridComponent },
  { path: 'customer/:id', component: CustomerComponent },
  { path: 'customer-grid', component: CustomerGridComponent },
  { path: 'controls-demo/:id', component: ControlsDemoComponent }, 
  { path: 'controls-demo-grid', component: ControlsDemoGridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
