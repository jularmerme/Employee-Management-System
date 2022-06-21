import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details/employee-details.component';
import { EmployeeListComponent } from './components/employee-list/employee-list/employee-list.component';
import { RegisterComponent } from './components/register/register/register.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee/update-employee.component';

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: '', redirectTo: 'employees', pathMatch: 'full'},
  { path: 'register', component: RegisterComponent },
  { path: 'update_employee/:id', component: UpdateEmployeeComponent },
  { path: 'employee-details/:id', component: EmployeeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }