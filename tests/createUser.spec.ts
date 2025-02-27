import { test, expect } from '@playwright/test';
import CreateUserPage from '../pageobjects_ts/CreateUserPage'; // Import the page object

test.describe('GoRest API - Create User', () => {
  test('Create a new user successfully', async () => {
    // Test data for creating a user
    const name = 'John Doe';
    const email = `johndoe${Date.now()}@example.com`; // Generate a unique email using timestamp
    const gender = 'male';
    const status = 'active';

    // Call the createUser method from the page object
    const response = await CreateUserPage.createUser(name, email, gender, status);

    // Validate the HTTP status code of the response
    expect(response.status).toBe(201);

    // Validate that the created user details match the input data
    expect(response.data).toMatchObject({
      name,
      email,
      gender,
      status,
    });

    // Log the response data for debugging purposes
    console.log('User created successfully:', response.data);
  });
});
