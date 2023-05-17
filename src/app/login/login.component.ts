import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router } from '@angular/router';
import axios from 'axios';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  title = 'material-login';
  
  constructor(private router:Router,private _snackBar: MatSnackBar) 
  {
  this.loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
      '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
    ),]),
    password: new FormControl('', [Validators.required,Validators.pattern(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
    )])
  }); 
  }

  ngOnInit(): void {
  }
  async onSubmit(){
    if(!this.loginForm.valid){
      return;
    }
    console.log(this.loginForm.value);   
    try {
      await axios({
        method: 'post',
        url: 'http://127.0.0.1:5002/auth',
        data:this.loginForm.value
      }).then( (response) => {
          console.log(response);
          if(response.data.data){
            let data = response.data.data;
            if(response.data.status==="Verified"){
              console.log(data,data[0])
              localStorage.setItem('authtokens',JSON.stringify(data[0]));              
              this._snackBar.open("Verified Successfully!..", "Ok", { duration: 5000 });
              this.router.navigate(['/home']);
            }
          }
          else{
            this._snackBar.open("Invalid Credential!..", "Ok", { duration: 5000 });
          }
        });
    } catch (error) {
      this._snackBar.open("Internal Server Error!..", "Ok", { duration: 5000 });
      console.log(error);
    } 
    
  }
  signUp(){
    this.router.navigate(['/signup']);
  }
home(){
  this.router.navigate(['/home']);
}
}
