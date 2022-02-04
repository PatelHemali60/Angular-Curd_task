import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeMainModule } from './employee-main/employee-main.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeMainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
