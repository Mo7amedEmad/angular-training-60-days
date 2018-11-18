import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router';
@Component({
  selector: 'app-department-details',
  template: `
  <h3>Welcome to Depatment Number : #{{departmentId}}</h3>
    <p>
      department-details works!
    </p>
    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">next</a>
    <div>
      <button (click)="gotoDepartments()">Back</button> 
    </div>
  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId;
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
   /*let id = parseInt(this.route.snapshot.paramMap.get('id'));
   this.departmentId = id;*/
   this.route.paramMap.subscribe((params: ParamMap) => {
     let id = parseInt(params.get('id'));
     this.departmentId = id;
   });
  }
  goPrevious(){
    let perviousId = this.departmentId -1;
    this.router.navigate(['/departments',perviousId]);
  }
  goNext(){
    let nextId = this.departmentId +1;
    this.router.navigate(['/departments',nextId]);
  }
  gotoDepartments(){

  }
}
