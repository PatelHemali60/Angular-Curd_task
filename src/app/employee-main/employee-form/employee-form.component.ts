import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
 
  employeeform : FormGroup;

  ngOnInit(): void {
   this.buildProductForm();
   console.log(this.employeeform)
  }

  buildProductForm() {
    this.employeeform = this.formBuilder.group({
      id:[],
      firstname:[,[Validators.required]],
      Lastname:[,[Validators.required]],
      email:[,[Validators.required,Validators.email]],
      dob:[null,Validators.required],
      phoneNo:[,[Validators.required,Validators.minLength(10)]],
      gender:[null,Validators.required],
    
      department:[' ',Validators.required],
      // quantity: [null,[Validators.required,Validators.min(10)]],
      // stock: [true,Validators.required],
      // term: [false,Validators.requiredTrue]
    });
  }

  submitEmployee() {
    if (this.employeeform.valid) {
      // this.createdProduct.emit(productToSave);
      this.resetForm();
    }
    else{
      console.log("solve Errors")
    }
  }
  get formControl(){
    return this.employeeform['controls'];
  }

  resetForm(){
    this.employeeform.reset();
  }
  // submit(){
  //   console.log(this.employeeform.value);
  // }
   
  
}
