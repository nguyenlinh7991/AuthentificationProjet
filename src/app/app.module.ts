import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { RegisterComponent } from './@page/register/register.component';
import { FirebaseAuthService } from './providers/firebase-auth.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './@page/home/home.component';
import { InforComponent } from './@page/infor/infor.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    InforComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment),
    AngularFireAuthModule,
    FormsModule,
    AngularFirestoreModule
  ],
  providers: [FirebaseAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
