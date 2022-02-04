import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from 'src/app/employee-main/employee-form/employee-form.component';
import { EmployeeListComponent } from 'src/app/employee-main/employee-list/employee-list.component';
import { EmployeeMainComponent } from './employee-main.component';

const routes: Routes = [
  {
    path: '', component: EmployeeMainComponent,
    children: [
      {
        path: 'list', component: EmployeeListComponent
      },
      {
        path: 'employee-form', component:EmployeeFormComponent
      },
      {path:'', redirectTo:'list', pathMatch:'full'}
    ]
  },
  {path:'', redirectTo:'main', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeMainRoutingModule { }
