import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { callbackify } from 'util';
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
         this.route.navigate(['infor', reponse.user.refreshToken]);
      }
    ).catch(error =>{
        alert( error.message);
    })
  }
 

  getDataByID(){
    // var user = this.authFire.auth.currentUser;
    // if (user != null) {
    //   // name = user.displayName;
    //   // email = user.email;
    //   // photoUrl = user.photoURL;
    //   // emailVerified = user.emailVerified;
    //   // uid = user.uid;  
    //   console.log(user)
    //   return user;
    // }
  }
  
  
}
