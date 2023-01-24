// Import Employee class with require()
const Employee = require('../lib/Employee')
// Test instantiate Employee instance
test("Makes employee object", () => {
    // Instantiate the Employee class with new operator to create an object and assign it to an new variable
    // Expect the type of the variable to be the "object" data type
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
  });
  
  // Test setting name of an employee
  test("Setting name of an employee", () => {
    // Assign the name of an employee to a new variable
    // Instantiate the Employee class, passing the variable of the employee name as an augument, to create an object and assign it to an new variable
    // Expect the value of the name property of the object to be equal to the value of the variable of the employee name
    const name = 'David';
    const employee = new Employee(name);
    expect(employee.name).toBe('object');
  });
  
  // Test setting id of an employee
  test("Setting id of an employee", () => {
    // Assign a number as an id to a new variable for the employeee id
    // Instantiate the Employee class with an employee name of your choice and the id variable as input arguments to create an employee object and assign it to a new variable
    // Expect the id of the employe object to be equal to the value of the id variable
    const testId = 100;
    const employee = new Employee('David', testId);
    expect(employee.id).toBe(testId);
  });
  
  // Test setting email of an employee
  test("Setting email of an employee", () => {
    // Assign an email to a new variable
    // Instantiate the Employee class, passing a name and an id and the email variable as input arguments, to create an employee object and assign it to a new variable
    // Expect the email of the employee object to be equal to the value of the email variable
    const testEmail = 'david@test.com';
    const employee = new Employee('David', 1, testEmail);
    expect(employee.email).toBe(testEmail);
  });
  
  // Test get name method
  test("Testing get name method from getName()", () => {
    // Assign the name of an employee to a new variable
      // Instantiate the Employee class, passing the variable of the employee name as input augument, to create an object and assign it to an new variable
      // Expect the getName method of the object to return the name to be equal to the value of the emplyee name variable
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
  