import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { Employee } from 'src/app/classes/employee/employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee = new Employee();


  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe({
      next: data => console.log(data),
      error: error => console.error(error),
      complete: () => console.log('complete')
    })
  }

  redirectToEmployeesList() {
    this.router.navigate(['/employees']);
    Swal.fire('Employee updated',`Employee ${this.employee.name} has been updated successfully`, `success`);
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe({
      next: data => console.log(data),
      error: error => console.error(error),
      complete: () => console.log('complete')
    })
    this.redirectToEmployeesList();
  }

}
