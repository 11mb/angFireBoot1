import { Injectable } from '@angular/core';
import { ISessionService } from 'src/general/i-session.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService implements ISessionService {

  showSpinner: boolean = false

  constructor() { }
}
 