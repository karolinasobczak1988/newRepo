import axios, { AxiosResponse } from 'axios';

class DeleteUserPage {
  private baseUrl: string;
  private token: string;

  constructor() {
    this.baseUrl = 'https://gorest.co.in/public/v2';
    this.token = 'f535cf82555ea6a2e8b8e111a62de32b58b370ea7a53beb0d84968ba0c69ec87';
  }

  async deleteUser(userId: number): Promise<AxiosResponse> {
    const response = await axios.delete(`${this.baseUrl}/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
    return response;
  }
}

export default new DeleteUserPage();
