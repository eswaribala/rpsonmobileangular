import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import {UserService} from "../services/user.service";
import {AuthService} from "../utility/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //user instance
  user=new User('','');
  errMessage:any='';

  constructor(private userService:UserService,
              private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }

  //submitting the form
  login(event)
  {
    event.preventDefault();
    console.log(this.user);
    this.userService.validateUser(this.user).subscribe(response=>{
      console.log(response);
      if (response == null) {
        this.errMessage = 'UserName/Password invalid';
      } else {
        this.errMessage = '';
        // @ts-ignore
        this.authService.sendToken(response.email);
        //this.router.navigate(['/Menu']);
        this.router.navigate(['/Menu'],
          { queryParams: {data: JSON.stringify(response)},
            skipLocationChange: true });
      }
      this.clearData();
    });
    }
  clearData() {
    this.user = new User('', '');
  }

  }


