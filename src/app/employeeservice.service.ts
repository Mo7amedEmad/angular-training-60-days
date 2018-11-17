import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse} from '@angular/common/http';
import { IEmployee } from './employee';
import  'rxjs';
/*import { Observable } from 'rxjs/Observable';*/
import { Observable } from 'rxjs/Rx';
/*import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';*/


@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  private _url:string = '/assets/data/employees.json';
  constructor(private http:HttpClient) { }
  
  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url).catch(this.errorHander);
/*  	return [
	  	{'id' : 1,"name" : 'emad' ,'age' : 32},
	  	{'id' : 1,"name" : '7ala' ,'age' : 33},
	  	{'id' : 1,"name" : 'iyad' ,'age' : 34},
	  	{'id' : 1,"name" : 'ibraheem' ,'age' : 45},
	  	{'id' : 1,"name" : 'amany' ,'age' : 20}
  	];*/
  }
  errorHander(error:HttpErrorResponse){
    return Observable.throw(error.message || 'Server Error');
  }
}
