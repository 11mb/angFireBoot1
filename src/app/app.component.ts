import { Component } from '@angular/core';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = true
  title = 'ngFbBs Ultimate Form Guide';

  mainMenu = [
    { title: 'New product', path: '/product/new', isActive: true },
    { title: 'Products', path: '/products' }
  ]

  constructor(private sessionSvc: SessionService) {
  }
}
