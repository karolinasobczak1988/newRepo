// GetCatAPIpage.js
const { request } = require('@playwright/test');

class GetCatAPIpage {
  constructor() {
    this.apiUrl = 'https://api.thecatapi.com/'; // Base API URL
  }

  // Make the GET API call with a dynamic endpoint
  async getApiResponse(endpoint) {
    // Create a new request context
    const apiContext = await request.newContext();

    // Perform the GET request
    const response = await apiContext.get(`${this.apiUrl}${'v1/images/search?limit=10'}`);
    
    return response;
  }
}

module.exports = GetCatAPIpage;
