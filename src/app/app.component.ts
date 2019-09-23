import { Component } from '@angular/core';
import { FirebaseAuthService } from './providers/firebase-auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cours-IMIE';
  user= {login:"", password:""};
  constructor(private fireBaseAuth:FirebaseAuthService){
    
  }
  submitForm(){
    console.log("Zoubida");
    this.fireBaseAuth.signup(this.user.login, this.user.password)
  }
}
