import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-department-details',
  template: `
  <h3>Welcome to Depatment Number : #{{departmentId}}</h3>
    <p>
      department-details works!
    </p>
  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
   let id = parseInt(this.route.snapshot.paramMap.get('id'));
   this.departmentId = id;
  }

}
