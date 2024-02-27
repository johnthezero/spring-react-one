package com.springreact.springreact.service;

import java.util.List;

import com.springreact.springreact.dto.EmployeeDto;

public interface EmployeeService {
	public EmployeeDto createEmployee(EmployeeDto employeeDto );
	public EmployeeDto getEmployeeById(Long employeeId);
	public List<EmployeeDto>getAllEmployees();
	public EmployeeDto updateEmployee(Long employeeId,EmployeeDto updatedEmployee);
	public void deleteEmployee(Long employeeId);
}
