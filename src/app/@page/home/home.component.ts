import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from 'src/app/providers/firebase-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user= {login:"", password:""};
  constructor(private fireBaseAuth:FirebaseAuthService) { }

  ngOnInit() {
  }
  submitForm(){
    console.log("Zoubida");
    this.fireBaseAuth.signup(this.user.login, this.user.password);
  }
}
