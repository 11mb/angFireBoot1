import { Injectable } from '@angular/core';
import { FirestoreObjectService } from '../../general/firestore-object.service';
import * as Model from '../model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})


export class CustomerService extends FirestoreObjectService<Model.Customer> {

  constructor(firestore: AngularFirestore) {
    super(Model.Customer, firestore, 'customer')
  }
}