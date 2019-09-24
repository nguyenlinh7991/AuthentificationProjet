import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseAuthService } from '../../providers/firebase-auth.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from "rxjs/operators"; 
import { CrudService } from 'src/app/providers/crud.service';

@Component({
  selector: 'app-infor',
  templateUrl: './infor.component.html',
  styleUrls: ['./infor.component.scss']
})
export class InforComponent implements OnInit {
  IdUser:string;
  items;
  data= {  
    title:"title", 
    autor:"chris",
    photoUrl:" ",
    subtitle:" ",
    description: " "
  };
  constructor(private route:ActivatedRoute, private firebase: FirebaseAuthService, private crud:  CrudService) {
    this.crud.addData(this.data)
    
   }

  ngOnInit() {
    // this.crud.addData(this.data)
    // this.crud.getData();
  //  this.crud.deleteData()
    // this.route.params.subscribe(params => {
    //   { this.IdUser = params.id;}
    this.crud.getData().subscribe((data)=>{
      this.items = data;
   });
   }
   delete(article){
    this.crud.deleteData(article)
   }

   logOut(){
     this.firebase.logout();
   }
}
