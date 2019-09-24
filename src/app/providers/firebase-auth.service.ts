import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor( private authFire: AngularFireAuth, private route: Router) { }
  /**
   * 
   * @param email :String - Email user
   * @param password : String - Password user 
   */
  signup(email: string , password: string){
      this.authFire.auth.createUserWithEmailAndPassword(email, password).then(
        reponse => {
           console.log(reponse);

        }
      ).catch(error =>{
        console.log("error", error)
      })
  }
  /**
   * 
   * @param email :String - Email user
   * @param password : String - Password user 
   */
  logIn(email: string , password: string){
    this.authFire.auth.signInWithEmailAndPassword(email, password).then(
      reponse => {
        console.log(reponse)
         this.route.navigate(['infor']);
      }
    ).catch(error =>{
        alert( error.message);
    })
  }
 

  logout(){
    this.authFire.auth.signOut()
      .then(()=> {
        this.route.navigate(['home']);
      })
    .catch(function(error) {
      console.log(error)
    });
  }
  doFacebookLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.authFire.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
        this.route.navigate(['infor'])
      }, err => {
        console.log(err);
        reject(err);
      })
    })
 }

}
