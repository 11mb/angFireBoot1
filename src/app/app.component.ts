import { Component } from '@angular/core';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = true
  title = 'Angular Form Guide';

  mainMenu = [
    { title: 'New product', path: '/product/new', isActive: true },
    { title: 'Products', path: '/product-grid' },
    { title: 'New customer', path: '/customer/new' },
    { title: 'Customers', path: '/customer-grid' }
  ]

  constructor(public sessionSvc: SessionService) {
  }

  menuItemSelected(item: any) {
    this.mainMenu.forEach(item => item.isActive = false)
    item.isActive = true
  }
}
