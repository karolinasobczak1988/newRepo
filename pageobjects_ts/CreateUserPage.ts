import axios, { AxiosResponse } from 'axios';

class CreateUserPage {
  private baseUrl: string;
  private token: string;

  constructor() {
    this.baseUrl = 'https://gorest.co.in/public/v2';
    this.token = 'f535cf82555ea6a2e8b8e111a62de32b58b370ea7a53beb0d84968ba0c69ec87';
  }

  async createUser(name: string, email: string, gender: string, status: string): Promise<AxiosResponse> {
    const response = await axios.post(
      `${this.baseUrl}/users`,
      {
        name,
        email,
        gender,
        status,
      },
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response; // Move return here, outside the function parameters
  }
}

export default new CreateUserPage();
