import { APIRequestContext } from '@playwright/test';

export class ApiHelper {
    private request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async fetchCatImages(limit: number, breedId: string): Promise<any> {
        const response = await this.request.get('https://api.thecatapi.com/v1/images/search', {
            params: {
                limit: limit.toString(),
                breed_ids: breedId,
            },
            headers: {
                'x-api-key': 'live_cwmqMAqgnUbEUVHR4IAEgdS5gpbaOyKhwP1YahtLF6TbVKDnTb5HZRR3f7EWtpoK',
            },
        });

        return response.json();
    }
}
