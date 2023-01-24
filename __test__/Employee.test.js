// Import Employee class with require()
const Employee = require('../lib/Employee')
// Test instantiate Employee instance
test("Makes employee object", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
  });
  
  // Test setting name of an employee
  test("Setting name of an employee", () => {
    const name = 'David';
    const employee = new Employee(name);
    expect(employee.name).toBe('object');
  });
  
  // Test setting id of an employee
  test("Setting id of an employee", () => {
    const testId = 100;
    const employee = new Employee('David', testId);
    expect(employee.id).toBe(testId);
  });
  
  // Test setting email of an employee
  test("Setting email of an employee", () => {
    const testEmail = 'david@test.com';
    const employee = new Employee('David', 1, testEmail);
    expect(employee.email).toBe(testEmail);
  });
  
  // Test get name method
  test("Testing get name method from getName()", () => {
    const testName = 'David';
    const employee = new Employee(testName);
    expect(expect.getName()).toBe(testName);
    });
  
  // Test get id method
  test("Testing the get id method", () => {
    const testId = 100;
    const employee = new Employee('David', testId);
    expect(employee.getId()).toBe(testId);
  });
  
  // Test get email method
  test("Testing the get email method", () => {
    const testEmail = 'david@test.com';
    const employee = new Employee('David', 1, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
  });
  
  // Test get role method
  test("Testing the get role method", () => {
    const testRole = 'Employee';
    const employee = new Employee('David', 1, 'david@test.com');
    expect(employee.getRole()).toBe(testRole);
  });
  