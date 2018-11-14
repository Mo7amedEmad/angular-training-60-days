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
	public name = 'emadddd';
	public infoClass  ="text-info";
	public dangerClass  ="text-danger";
	public HasError  =false;
	public isSpecial  =true;
	public hightlights ="blue";
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
  constructor() { }

  ngOnInit() {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
  }

}
