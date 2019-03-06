import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { plainToClass } from "class-transformer";
import { ModelBase } from './model-base';
import { WhereFilter } from './where-filter';

export abstract  class FirestoreObjectService<T extends ModelBase> {

  ref: AngularFirestoreCollection<T>

  constructor(protected type: { new(): T; }, protected firestore: AngularFirestore, public firestorePath: string) {
    this.ref = this.firestore.collection<T>(this.firestorePath)
  }

  getAll$(): Observable<T[]> {
    return this.firestoreToObjects(this.ref)
  }

  getFiltered1$(fieldPath: string, operator: firestore.WhereFilterOp = '==', value: any): Observable<T[]> {
    let filter: WhereFilter = new WhereFilter(fieldPath, operator, value)
    return this.getFiltered$(filter)
  }

  getFiltered$(filter: WhereFilter): Observable<T[]> {
    let ref = this.firestore.collection<T>(this.firestorePath, qry => qry.where(filter.fieldPath, filter.operator, filter.value));
    return this.firestoreToObjects(ref)
  }

  firestoreToObjects(ref: AngularFirestoreCollection<T>): Observable<T[]> {
    return ref.snapshotChanges().map(changes => {

      let typedObjects = changes.map(snapshot => this.snapshotDocToClass(snapshot.payload.doc))

      return typedObjects;
    })
  }

  snapshotDocToClass(snapshotDoc): T {
    let obj = {
      id: snapshotDoc.id,
      ...(snapshotDoc.data() as unknown)
    }

    let typed = plainToClass(this.type, obj)

    return typed;
  }

  getById$(id: string): Observable<T> {
    let doc = this.ref.doc<T>(id)

    return doc.get().map(snapshot => this.snapshotDocToClass(snapshot))
  }

  delete(id: string): Promise<void> {
    return this.ref.doc(id).delete()
  }

  /* Method will also work with ordinary objects, the id will always be removed
  */
  save(typedObj: ModelBase): Promise<any> {

    let id = typedObj.id

    if (!typedObj)
      return

    let obj = null

    if (typedObj instanceof this.type)
      obj = typedObj.toObject()
    else
      obj = typedObj

    if (id) {
      delete obj.id
      return this.ref.doc(id).set(obj);
    }
    else
      return this.ref.add(obj).then(res => { typedObj.id = res.id })
  }
}

