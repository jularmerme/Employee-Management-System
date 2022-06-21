import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/classes/employee/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number;
  employee: Employee;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    // this.employee = new Employee();
    /* this.employeeService.getEmployeeById(this.id).subscribe(
      res => this.employee = res,
      err => console.error(err),
      () => console.log('complete')
    ); */
    this.employeeService.getEmployeeById(id).subscribe((data) => { console.log(data) })
    Swal.fire(`Employee Details ${this.employee.name}`);
  }

}
