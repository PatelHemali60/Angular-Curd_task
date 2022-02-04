import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeMainRoutingModule } from './employee-main-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeMainComponent } from './employee-main.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [EmployeeFormComponent,EmployeeListComponent, EmployeeMainComponent],
  imports: [
    CommonModule,
    EmployeeMainRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  
})
export class EmployeeMainModule { }
