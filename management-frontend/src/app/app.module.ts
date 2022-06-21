import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list/employee-list.component';
import { RegisterComponent } from './components/register/register/register.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    RegisterComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
