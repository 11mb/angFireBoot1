import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerGridComponent } from './customer-grid/customer-grid.component';

const routes: Routes = [
  { path: 'product/:id', component: ProductComponent }, 
  { path: 'product-grid', component: ProductGridComponent },
  { path: 'customer/:id', component: CustomerComponent },
  { path: 'customer-grid', component: CustomerGridComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
