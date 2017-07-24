import { Component, OnInit ,Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Auth } from '../../module/login/entity';

//declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css',
    '../../../assets/plugins/iCheck/square/blue.css'
  ]
})
export class LoginComponent implements OnInit {

  auth: Auth;
  username:string;
  password:string;

  constructor(@Inject('auth') private service, private router: Router) {
  }

  ngOnInit() { }

  onSubmit(formValue:any):void {
    this.service
        .loginWithCredentials(formValue.username, formValue.password)
        .then(auth => {
          let redirectUrl = (auth.redirectUrl === null)? '/': auth.redirectUrl;
          if(!auth.hasError){
            this.router.navigate([redirectUrl]);
            sessionStorage.removeItem('redirectUrl');
          } else {
            this.auth = Object.assign({}, auth);
          }
        });
  }

}
