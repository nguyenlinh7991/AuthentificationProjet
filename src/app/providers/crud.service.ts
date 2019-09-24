import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


export class article {
  title:string;
  autor:string;
  photoUrl:string;
  subtitle:string
  description: string;
}
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private db: AngularFirestore) { }

  getData(){
    return this.db.collection('articles').snapshotChanges();
  }

  addData(articleData:article){
   return this.db.collection("articles").add(articleData).then(res =>{console.log(res)}).catch((error)=>{console.log(error)});
  }

//   updateData(data) {
//    this.db.collection("articles").doc(data.payload.doc.id).set(data);
//  }


 deleteData(data) {
  return  this.db.collection("articles").doc(data.payload.doc.id).delete();
}
}
