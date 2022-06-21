package org.employees.system.management.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.employees.system.management.exceptions.ResourceNotFoundException;
import org.employees.system.management.models.Employee;
import org.employees.system.management.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {

  @Autowired
  private EmployeeRepository employeeRepository;

  // Retrieve a list with all the existing employees
  @GetMapping("/employees")
  public List<Employee> findAllEmployees() {
    return employeeRepository.findAll();
  }

  // Create an Employee
  @PostMapping("/employee")
  public Employee saveEmployee(@RequestBody Employee employee) {
    return employeeRepository.save(employee);
  }

  @GetMapping("/employee/{id}")
  public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
    Employee employee = employeeRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Employee doesnt exist"));
    return ResponseEntity.ok(employee);
  }

  @PutMapping("/employee/{id}")
  public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee updateEmployee) {
    Employee employee = employeeRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Employee doesn\'t exist"));
    employee.setName(updateEmployee.getName());
    employee.setLastName(updateEmployee.getLastName());
    employee.setEmail(updateEmployee.getEmail());

    Employee updatedEmployee = employeeRepository.save(employee);
    return ResponseEntity.ok(updatedEmployee);
  }

  @DeleteMapping("/employee/{id}")
  public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id) {
    Employee employee = employeeRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Employee doesn\'t exist" + id));
    employeeRepository.delete(employee);
    Map<String, Boolean> response = new HashMap<>();
    response.put("Delete", Boolean.TRUE);
    return ResponseEntity.ok(response);
  }

}
