package com.springreact.springreact.service;



import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.springreact.springreact.dto.EmployeeDto;
import com.springreact.springreact.entity.Employee;
import com.springreact.springreact.exception.ResourceNotFoundException;
import com.springreact.springreact.mapper.EmployeeMapper;
import com.springreact.springreact.repository.EmployeeRepository;

import lombok.AllArgsConstructor;


@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
	
	private EmployeeRepository employeeRepository;
	
	@Override
	public EmployeeDto createEmployee(EmployeeDto employeeDto) {
		Employee employee= EmployeeMapper.mapToEmployee(employeeDto);
		Employee savedEmployee=employeeRepository.save(employee);	
		return EmployeeMapper.mapToEmployeeDto(savedEmployee);
	}

	@Override
	public EmployeeDto getEmployeeById(Long employeeId) {
		Employee employee=employeeRepository.findById(employeeId)
				.orElseThrow(()->
				new ResourceNotFoundException("Employee with the given id does not exist : "+employeeId));
		return EmployeeMapper.mapToEmployeeDto(employee);
	}

	@Override
	public List<EmployeeDto> getAllEmployees() {
		List<Employee> employees=employeeRepository.findAll();
		return employees.stream().map((employee)->EmployeeMapper.mapToEmployeeDto(employee)).collect(Collectors.toList());
	}

	@Override
	public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {
		Employee employee=employeeRepository.findById(employeeId).orElseThrow(
				()->new ResourceNotFoundException("Employee with the given id does not exist")
		);
		employee.setFirstName(updatedEmployee.getFirstName());
		employee.setLastName(updatedEmployee.getLastName());
		employee.setEmail(updatedEmployee.getEmail());
		Employee updatedEmployeeObj=employeeRepository.save(employee);
		return EmployeeMapper.mapToEmployeeDto(updatedEmployeeObj);
	}

	@Override
	public void deleteEmployee(Long employeeId) {
		Employee employee=employeeRepository.findById(employeeId).orElseThrow(
				()->new ResourceNotFoundException("Employee with the given id does not exist")
		);
		employeeRepository.deleteById(employeeId);
	}

}
