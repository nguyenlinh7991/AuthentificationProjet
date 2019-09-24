import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseAuthService } from '../../providers/firebase-auth.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map, pluck } from "rxjs/operators"; 
import { CrudService } from 'src/app/providers/crud.service';
import { NgForm } from '@angular/forms';
import { article } from '../../providers/crud.service';
import * as $ from "jquery";
import { Observable, ReplaySubject, fromEvent } from 'rxjs';
@Component({
  selector: 'app-infor',
  templateUrl: './infor.component.html',
  styleUrls: ['./infor.component.scss']
})
export class InforComponent implements OnInit {
  IdUser:string;
  items;
  url;
  nameFile;
  articleCurrent;
  constructor(private route:ActivatedRoute, private firebase: FirebaseAuthService, private crud:  CrudService) {
    
   }

  ngOnInit() {
    // get all of articles and display
      this.crud.getData().subscribe((data)=>{
      this.items = data;
   });
   }


   // return article which you want to change
   getArticleCurrent(ar){
      return this.articleCurrent =ar;
   }

   // add object to database
   addData(form: NgForm){
     let data= form.value;
     let dataArticle:article= {  
      title: data.title, 
      autor: data.autor,
      photoUrl: this.url,
      subtitle: data.subtitle,
      description: data.description
    };
     this.crud.addData(dataArticle);
     form.reset();
   }

   // delete object
   delete(article){
    this.crud.deleteData(article)
   }

   //logout
   logOut(){
     this.firebase.logout();
   }



  previewFile(fileToRead,e) {
    this.nameFile= e.target.files[0].name;
    if (fileToRead.files.length > 0) {
      const fileReader = new FileReader();
      let imageToUpload =fileToRead.files[0];
      this.imageToBase64(fileReader, imageToUpload)
        .subscribe(base64image => {
        this.url= base64image;
        });
    }
  }

  imageToBase64(fileReader: FileReader, fileToRead: File): Observable<string> {
    fileReader.readAsDataURL(fileToRead);
    return fromEvent(fileReader, 'load').pipe(pluck('currentTarget', 'result'));
  }

  updateData(form:NgForm){
    let id= this.articleCurrent.payload.doc.id;
    let data= form.value;
    if(this.url != undefined){
       data.photo= this.url;
    }else{
      data.photo= this.articleCurrent.payload.doc.data().photoUrl;
    }
     this.crud.updateData(id,data);
  }
}
