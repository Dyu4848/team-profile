// Import Engineer class with require()
const Engineer = require('../lib/Engineer');
// Test setting github account
test("Test setting of github account", () => {
  const testGithub = 'dyu4848';
  const employee = new Engineer('David', 1, 'david@test.com', testGithub);
  expect(employee.github).toBe(testGithub);
});

// Test get role method
test("Testing get role method", () => {
  const testRole = 'Engineer';
  const employee = new Engineer('David', 1, 'david@test.com', testRole);
  expect(employee.getRole()).toBe(testRole);
});

// Test get github method
test("Testing get github method", () => {
  const testGithub = 'dyu4848';
  const employee = new Engineer('David', 1, 'david@test.com', testGithub);
  expect(employee.getGithub()).toBe(testGithub);
});
