import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  /*templateUrl: './test.component.html',*/
  template:`	
  		<h2>welcome mr {{name}}</h2>	
  		<p class="text-success">this is the first time to see you </p>
  		<p class="{{infoClass}} text-speical">this is the first time to see you </p>
  		<p [class]="dangerClass">this is the first time to see you </p>
  		<p [class.text-danger]="HasError">this is has error or not </p>
  		<hr>
  		<h2 [ngClass]="messsageClasses">hello Emad ....</h2>
  		<hr>
  		<h2 [style.color]="'orange'">Style Binding ....</h2>	
  		<h2 [style.color]="HasError ? 'red' : 'green'">Style Binding ....</h2>	
  		<h2 [style.color]="hightlights">Style Binding ....</h2>	
  		<h2 [ngStyle]="highlightsobj">Style Binding ....</h2>	
  		<hr>
  		<button (click) ="onClick()"> Greating </button>
  		<p>{{greating}}</p>
  		<hr>
     <!--**************************************************************-->
  		<p>event details : </p>
  		<button (click) ="eventdetails($event)"> Greating </button>
		<hr>
    <!--**************************************************************-->
  		<p>template Event : </p>
  		<button (click) ="greating ='hellooooo 7ala '"> Greating </button>
 		<hr>
     <!--**************************************************************-->
  		<p>template reference variable  : </p>
  		<input type="text" #myInput>
  		<button (click) ="logMessage(myInput.value)"> log </button>
  		<hr>
      <!--**************************************************************-->
  		<p>two way Binding  : </p>
  		<input type="text" [(ngModel)] ="username">
  		{{username}}
  		<hr>
      <!--**************************************************************-->
  		<p>ngIf - ngSwitch - ngFor directive : </p> <span [style.color]="'orange'"><span>
  		  <h2 *ngIf="displaygreating">hello emad again </h2>
  		<hr>
      <!--**************************************************************-->
  		<p>ngIf - ngSwitch - ngFor directive : </p>
    		<h2 *ngIf="displaygreating">hello emad again </h2>
        <hr>
      <!--**************************************************************-->
      <p>ngIf elseblock: </p>
        <h2 *ngIf="displaynames; else elseBlock">hello emad  instead of 7ala </h2>
        <ng-template #elseBlock>
          <h2>hello 7ala instead of emad ....</h2>  
        </ng-template>
      <!--**************************************************************-->
      <hr>
      <p>ngIf thenBlock elseblock: </p>
        <div *ngIf="displaynames; then thenBlock; else elseBlock"></div>

        <ng-template #thenBlock>
          <h2>hello emad  instead of 7ala  ....</h2>  
        </ng-template>

        <ng-template #elseBlock>
          <h2>hello 7ala instead of emad ....</h2>  
        </ng-template>
      <!--**************************************************************-->
      <hr>
      <p>Pipes for strings: </p>
        <h2>{{name}}</h2>
        <h2>{{name | lowercase}}</h2>
        <h2>{{name | uppercase}}</h2>
        <h2>{{message | titlecase}}</h2>
        <h2>{{name | slice:2:4}}</h2>
        <h2>{{persons | json}}</h2>

      <p>Pipes for numbers: </p>
        <h2>{{5.678 | number: '1.2-3'}}</h2>
        <h2>{{5.678 | number: '3.4-5'}}</h2>
        <h2>{{5.678 | number: '3.1-2'}}</h2>

      <p>Pipes for percent and currency : </p>
        <h2>{{5.678 | currency}}</h2>
        <h2>{{5.678 | currency: 'GBP'}}</h2>
        <h2>{{5.678 | currency: 'GBP' : 'code'}}</h2>

      <p>Pipes for date : </p>
        <h2>{{date}}</h2>
        <h2>{{date | date :'short'}}</h2>
        <h2>{{date | date :'shortDate'}}</h2>
        <h2>{{date | date :'shortTime'}}</h2>
        <hr>
        <h2>{{date | date :'long'}}</h2>
        <h2>{{date | date :'longDate'}}</h2>
        <h2>{{date | date :'longTime'}}</h2>
        <hr>
        <h2>{{date | date :'medium'}}</h2>
        <h2>{{date | date :'mediumDate'}}</h2>
        <h2>{{date | date :'mediumTime'}}</h2>
      <!--**************************************************************-->
        <hr>
        
      <!--**************************************************************-->

      <!--**************************************************************-->

      <!--**************************************************************-->

      <!--**************************************************************-->

      <!--**************************************************************-->

      <!--**************************************************************-->

      <!--**************************************************************-->

      <!--**************************************************************-->

  `,
  styles: [`
  	.text-success{
  		color:green;
  	}
  	.text-danger{
  		color:red;
  	}
  	.text-info{
  		color:blue;
  	}
  	.text-speical{
  		font-weight: bold;
  		font-style:italic;
  	}
  `]
})
export class TestComponent implements OnInit {
	public name = 'Emadddd';
	public infoClass  ="text-info";
	public dangerClass  ="text-danger";
	public HasError  =false;
	public isSpecial  =true;
	public hightlights ="blue";
	public greating = "hello emad ";
  public username = "";
	public message = "welcome to training";
  displaygreating = true;
	displaynames = false;
  public date = new Date();
	//object
	public messsageClasses ={
		'text-success' : !this.HasError,
		'text-danger' : this.HasError,
		'text-speical' : this.isSpecial
	}
	public highlightsobj = {
		color : 'yellow',
		font : '30',
		background : 'red'

	}
  public persons = {
    'firstName' : 'iyad',
    'secondName' : 'Mo7amed'
  }
  constructor() { }

  ngOnInit() {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
  }
  /************** customized Functions **********************************/
  onClick(){
  	console.log('welcome to emad ');
  	this.greating = "hello iyad ";
  }
  eventdetails(event){
  	console.log(event);
  }
  logMessage(value){
  	console.log(value);
  }
  /************** end customized Functions ******************************/
}
