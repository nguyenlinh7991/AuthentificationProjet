import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseAuthService } from '../../providers/firebase-auth.service';
@Injectable()
@Component({
  selector: 'app-infor',
  templateUrl: './infor.component.html',
  styleUrls: ['./infor.component.scss']
})
export class InforComponent implements OnInit {
  IdUser:string;
  constructor(private route:ActivatedRoute, private firebase: FirebaseAuthService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      { this.IdUser = params.id;}
   })


   this.firebase.getDataByID();
}

}
