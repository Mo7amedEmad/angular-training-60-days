import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employee-details',
  template: `
		<h2>Employee Details : </h2>
    <h3>{{errorMsg}}</h3>
		<ul *ngFor="let employee of employees">
			<li>{{employee.id}} - {{employee.name}} - {{employee.age}}</li>
		</ul>
  `,
  styles: [``]
})
export class EmployeeDetailsComponent implements OnInit {
  public employees = [];
  public errorMsg;
   constructor(private _employeeService : EmployeeserviceService) { }

  ngOnInit() {
  	this._employeeService.getEmployees().subscribe(data => this.employees =data,
       error => this.errorMsg = error);
  }

}