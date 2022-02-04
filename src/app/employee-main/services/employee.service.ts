import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

 apiLink : string;

  constructor(private http: HttpClient) {
    this.apiLink= environment.baseURL;
   }

  getDepartmentList(){
    // return this.http.getlist();
  }
}
