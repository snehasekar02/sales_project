import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PgNotFoundComponent } from './pg-not-found/pg-not-found.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    PgNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatTooltipModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [HttpClientModule,HttpClient,MatDatepickerModule,
    MatNativeDateModule,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
