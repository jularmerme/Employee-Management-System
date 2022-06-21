import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/classes/employee/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  // This endpoint get all the employees
  private baseURL = "http://localhost:8080/api/v1";


  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}/employees`);
  }

  registerEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/employee`, employee);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/employee/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/employee/${id}`);
  }

  getEmployeeById(id: number): Observable<Object> {
    return this.httpClient.get<Employee>(`${this.baseURL}/employee/${id}`)
  }

}
