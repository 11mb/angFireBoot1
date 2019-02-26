import { Injectable } from '@angular/core';
import { FirestoreObjectService } from '../../general/firestore-object.service';
import * as Model from '../model';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})

export class Product2Service extends FirestoreObjectService<Model.Product2> {

  constructor(firestore: AngularFirestore) {
    super(Model.Product2, firestore, 'product2')
  }

}
