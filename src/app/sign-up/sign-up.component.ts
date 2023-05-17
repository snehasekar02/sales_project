import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router } from '@angular/router';
import axios from 'axios';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  loginForm: FormGroup | any;
  title = 'material-SignUp';
  constructor(private router:Router,private _snackBar: MatSnackBar) 
  {
    this.loginForm = new FormGroup({
    name:new FormControl(''),
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
  Login() {
    this.router.navigate(['/login']);
  }
  async onSubmit(){
    if(!this.loginForm.valid){
      return;
    }
    let datas = this.loginForm.value;
    datas['token']=""
    console.log(datas);
    // localStorage.setItem('user',JSON.stringify(datas));
    try {
      await axios({
        method: 'post',
        url: 'http://127.0.0.1:5002/createuser',
        data:datas
      }).then( (response) => {
          console.log(response);
          if(response.data){
            let data = response.data;
            if(response.data.status){
              console.log(data);              
              // alert(data.status);
              if(data.status === "Email Already Exist"){
                this._snackBar.open("Email Already Exist!..", "Ok", { duration: 5000 });
              }
              if(data.status!=="Email Already Exist"){
                this._snackBar.open("User registered Successfully!..", "Ok", { duration: 5000 });
                this.router.navigate(['/login']);
              };          
                  
            }
          }
          else{
            this._snackBar.open("1Internal Server Error!..", "Ok", { duration: 5000 });
          }
        });
    } catch (error) {
      this._snackBar.open("2Internal Server Error!..", "Ok", { duration: 5000 });     
      console.log(error);
    } 
    
  }

}
