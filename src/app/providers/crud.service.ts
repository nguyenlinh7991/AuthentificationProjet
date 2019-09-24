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
  /**
   * 
   * @param
   * get all data in database
   */
  getData(){
    return this.db.collection('articles').snapshotChanges();
  }

    /**
   * 
   * @param articleData: article, object 
   * add a object article in database
   */
  addData(articleData:article){
   return this.db.collection("articles").add(articleData).then(res =>{}).catch((error)=>{alert(error.message)});
  }


     /**
   * 
   * @param data: article , object which you want to change
   * @param idData: string,  
   * update a object article in database by id
   */
  updateData(idData,data) {
    return  this.db.collection("articles").doc(idData).set({
      title: data.title, 
      autor: data.autor,
      photoUrl: data.photo,
      subtitle: data.subtitle,
      description: data.description
    });
 }

      /**
   * 
   * @param data: article , object which you want to delete  
   * delete a object article in database
   */
 deleteData(data) {
  return  this.db.collection("articles").doc(data.payload.doc.id).delete();
}

}
