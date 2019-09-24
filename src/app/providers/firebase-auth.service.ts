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
   * sign up
   */
  signup(email: string , password: string){
      this.authFire.auth.createUserWithEmailAndPassword(email, password).then(
        reponse => {
           alert('User created')
           this.route.navigate(['infor']);
        }
      ).catch(error =>{
        alert( error)
      })
  }
  /**
   * 
   * @param email :String - Email user
   * @param password : String - Password user 
   * login or sign up 
   */
  logIn(email: string , password: string){
    this.authFire.auth.signInWithEmailAndPassword(email, password).then(
      reponse => {
         this.route.navigate(['infor']);
      }
    ).catch(error =>{
        this.signup(email,password);
    })
  }
 
  /**
   * 
   * @param 
   * log out
   */
  logout(){
    this.authFire.auth.signOut()
      .then(()=> {
        this.route.navigate(['home']);
      })
    .catch(function(error) {
         alert(error.message)
    });
  }

    /**
   * 
   * @param 
   * authtification with facebook
   */
  doFacebookLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.authFire.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
        this.route.navigate(['infor'])
      }, err => {
       alert(err);
        reject(err);
      })
    })
 }

}
