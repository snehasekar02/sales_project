import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PgNotFoundComponent } from './pg-not-found/pg-not-found.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: '', component: LoginComponent},
  { path: 'signup', component: SignUpComponent },
  { path: '**', component: PgNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
