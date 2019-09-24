import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor( private authFire: AngularFireAuth) { }
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
        console.log(reponse);

      }
    ).catch(error =>{
      console.log("error", error)
    })
  }
}
