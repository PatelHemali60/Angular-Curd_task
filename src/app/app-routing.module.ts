import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo:'mod', pathMatch:'full'},
  {path: 'mod' , 
   loadChildren: ()=> import('./employee-main/employee-main.module').then(( abc ) => abc.EmployeeMainModule)}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
