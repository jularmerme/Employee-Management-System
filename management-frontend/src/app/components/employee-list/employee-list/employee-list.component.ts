import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/classes/employee/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => 
      { this.employees = data; })
  }

  public updateEmployee(id: number) {
    this.router.navigate(['update_employee', id]);
  }

  public deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe({ 
      next: data => console.log(data),
      error: error => console.error(error),
      complete: () => console.log('complete')
    })
    this.getEmployees();
  }

  public viewEmployee(id: number) {
    this.router.navigate(['employee-details', id]);
  }

}
