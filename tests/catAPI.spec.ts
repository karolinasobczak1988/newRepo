import { test, expect, request, APIRequestContext } from '@playwright/test';
import { ApiHelper } from '../pageobjects_ts/ApiHelper';

test.describe('The Cat API', () => {
    let apiHelper: ApiHelper;
    let apiContext: APIRequestContext;

    test.beforeAll(async () => {
        // Manually create the APIRequestContext
        apiContext = await request.newContext();
        apiHelper = new ApiHelper(apiContext);
    });

    test.afterAll(async () => {
        // Dispose of the APIRequestContext after tests
        await apiContext.dispose();
    });

    test('should fetch 10 Bengal cat images', async () => {
        const limit = 10;
        const breedId = 'beng'; // Bengal breed ID
        const catImages = await apiHelper.fetchCatImages(limit, breedId);

        // Validate response
        expect(catImages).toBeTruthy();
        expect(catImages.length).toBe(limit);

        // Log the results
        console.log('Fetched Cat Images:', catImages);
    });
});
