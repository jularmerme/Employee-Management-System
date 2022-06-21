import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/classes/employee/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    
  }

  saveEmployee() {
    this.employeeService.registerEmployee(this.employee).subscribe({
      next: data => console.log(data),
      error: error => console.error(error),
      complete: () => console.info('complete')
    });
    this.redirectToEmployeeList();
  }

  redirectToEmployeeList() {
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }

}
