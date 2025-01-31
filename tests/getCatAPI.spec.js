// getCatAPI.spec.js
const { test, expect } = require('@playwright/test');
const GetCatAPIpage = require('../pageobjects/GetCatAPIpage');

test('API GET request test', async () => {
  const getCatAPIpage = new GetCatAPIpage();
  
  // Making the GET request with the endpoint as a parameter
  const response = await getCatAPIpage.getApiResponse('v1/images/search?limit=10');
  
  // Verify status code
  expect(response.status()).toBe(200);
  
  // Check the response body
  const responseBody = await response.json();
  
  // Verify that the response contains an array of images
  expect(Array.isArray(responseBody)).toBe(true);
  
  // Optionally, verify that each image object in the array has an `url` field
  if (responseBody.length > 0) {
    expect(responseBody[0]).toHaveProperty('url');
  }
});
