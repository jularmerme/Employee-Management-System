package org.employees.system.management.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "employees")
public @Data class Employee {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private Long id;

  @Column(name = "name", nullable = false)
  private String name;

  @Column(name = "lastname", nullable = false)
  private String lastName;

  @Column(name = "email", nullable = false)
  private String email;

  public Employee() {
  }

  public Employee(String name, String lastName, String email) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
  }

  public Employee(Long id, String name, String lastName, String email) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
  }

}
