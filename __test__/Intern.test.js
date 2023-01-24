// Import Intern class with require()
const Intern = require('../lib/Intern');

// Test setting school
test('Test setting of school', () => {
    const testSchool = 'University of Colorado, Boulder';
    const employee = new Intern('David', 1, 'david@test.com', testSchool);
    expect(employee.school).toBe(testSchool);
});

// test get role method
test('Testing get role method', () => {
    const testIntern = 'Intern';
    const employee = new Intern('David', 1, 'david@test.com', testIntern);
    expect(employee.getRole()).toBe(testIntern);
});


// test get school method

test('Testing get school method', () => {
    const testSchool = 'University of Colorado, Boulder';
    const employee = new Intern('David', 1, 'david@test.com', testSchool);
    expect(employee.getSchool()).toBe(testSchool);
});