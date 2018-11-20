import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router';
@Component({
  selector: 'app-department-details',
  template: `
  <h3>Welcome to Depatment Number : #{{departmentId}}</h3>

    <p>
      <button (click)="showOverview()">overview</button>
      <button (click)="showContact()">contact</button>
    </p>
    <router-outlet></router-outlet>
    <hr>
    <p>
      department-details works!
    </p>
    <p>
      <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">next</button>
    </p>
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
      let selectedId = this.departmentId ? this.departmentId : null;
      /*this.router.navigate(['/departments',{id:selectedId}]);*/
      this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route});
  }
  showOverview(){
    this.router.navigate(['overview'],{relativeTo:this.route});
  }
  showContact(){
    this.router.navigate(['contact'],{relativeTo:this.route});
  }
}
