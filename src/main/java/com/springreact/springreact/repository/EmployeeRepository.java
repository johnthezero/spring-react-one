package com.springreact.springreact.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springreact.springreact.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {
}
