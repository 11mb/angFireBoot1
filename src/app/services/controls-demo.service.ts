import { Injectable } from '@angular/core';
import { FirestoreObjectService } from '../../general/firestore-object.service';
import * as Model from '../model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class ControlsDemoService extends FirestoreObjectService<Model.ControlsDemo> {

  constructor(firestore: AngularFirestore) {
    super(Model.ControlsDemo, firestore, 'controlsDemo')
  }

}

