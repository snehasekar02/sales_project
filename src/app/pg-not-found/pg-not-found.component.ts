import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pg-not-found',
  templateUrl: './pg-not-found.component.html',
  styleUrls: ['./pg-not-found.component.css']
})
export class PgNotFoundComponent implements OnInit {

  constructor(private router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    let datas=localStorage.getItem('authtokens');
      if(datas){
        this._snackBar.open("Invalid route!.. Redirect to home Page", "Ok", { duration: 5000 }); 
        let self = this;
        setTimeout(function () {
        self.router.navigateByUrl('/home');
        }, 3000)
      }
      else{
        this._snackBar.open("Invalid route!.. Redirect to Login Page", "Ok", { duration: 5000 });
        let self = this;
        setTimeout(function () {
          self.router.navigateByUrl('/login');
        }, 3000)
      }
  }
}
