import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

import { DepartmentListComponent } from './department-list/department-list.component';
import { ClientListComponent } from './client-list/client-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';


const routes:Routes = [
	{ path: '', redirectTo: '/departments', pathMatch: 'full' },
	{path: 'departments' , component: DepartmentListComponent},
	{path: 'clients' , component: ClientListComponent},
	{path: 'departments/:id' , component: DepartmentDetailsComponent},
	{path: "**" , component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent ,
									ClientListComponent,
									PageNotFoundComponent,
									DepartmentDetailsComponent];
