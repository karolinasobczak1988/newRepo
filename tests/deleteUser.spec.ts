import { test, expect } from '@playwright/test';
import CreateUserPage from '../pageobjects_ts/CreateUserPage'; // Import for creating a user
import DeleteUserPage from '../pageobjects_ts/DeleteUserPage'; // Import for deleting a user

test.describe('GoRest API - Delete User', () => {
  test('Delete a user successfully', async () => {
    // Step 1: Create a user to delete
    const name = 'Jane Doe';
    const email = `janedoe${Date.now()}@example.com`; // Unique email
    const gender = 'female';
    const status = 'active';

    const createResponse = await CreateUserPage.createUser(name, email, gender, status);

    // Validate that the user was created successfully
    expect(createResponse.status).toBe(201);
    const userId = createResponse.data.id; // Extract the user ID from the response

    // Step 2: Delete the created user
    const deleteResponse = await DeleteUserPage.deleteUser(userId);

    // Validate the deletion was successful
    expect(deleteResponse.status).toBe(204); // 204 indicates successful deletion
    console.log('User deleted successfully:', userId);
  });
});
