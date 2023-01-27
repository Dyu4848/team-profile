// Import Manager class with require()
const Manager = require('../lib/Manager');

// Test setting office number
test('Test setting of office number', () => {
    const testNumber = '50';
    const employee = new Manager('David', 1, 'david@test.com', testNumber);
    expect(employee.officeNumber).toBe(testNumber);
});

// Test get office number
test('Testing get office number method', () => {
    const testNumber = 50;
    const employee = new Manager('David', 1,'dyu@test.com', testNumber);
    expect(employee.getOfficeNumber()).toBe(testNumber);
})

// Test get role method
test('Testing get role method', () => {
    const testRole = 'Manager';
    const employee = new Manager('David', 1, 'david@test.com');
    expect(employee.getRole()).toBe(testRole);
});

