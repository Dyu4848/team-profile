// Import Manager class with require()
const Manager = require('../lib/Manager');

// Test setting office number
test('Test setting of office number', () => {
    const testNumber = '50'
    const employee = new Manager('David', 1, 'david@test.com');
    expect(employee.officeNumber).toBe(testNumber);
});

// Test get role method
test('Testing get role method', () => {
    const testRole = 'Role';
    const employee = new Manager('David', 1, 'david@test.com');
    expect(employee.getRole()).toBe(testRole);
});

