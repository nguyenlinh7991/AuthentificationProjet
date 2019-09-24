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
      this.crud.getData().subscribe((data)=>{
      this.items = data;
   });
    // this.crud.addData(this.data)
    // this.crud.getData();
  //  this.crud.deleteData()
    // this.route.params.subscribe(params => {
    //   { this.IdUser = params.id;}
  
   }

   getArticleCurrent(ar){
  
      return this.articleCurrent =ar;
   }
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
   delete(article){
    this.crud.deleteData(article)
   }

   logOut(){
     this.firebase.logout();
   }



  previewFile(fileToRead) {
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
    console.log(data)
     this.crud.updateData(id,data);
  }
}
