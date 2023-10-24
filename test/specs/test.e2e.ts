import { expect } from '@wdio/globals'
import HomePage from '../pageobjects/home.page.js'
import RecommendedPage from '../pageobjects/recommended.page.js'

describe('Universal Media Player app', () => {
    it('should display the recommended item in the list', async () => {
        await expect(HomePage.recommendedOption()).toBeExisting();
    })

    it('should display the albums item in the list', async () => {
        await expect(HomePage.albumsOption()).toBeExisting();
    })

    it('should fail the test suite', async () => {
        await expect(HomePage.albumsOption()).toBeFalsy();
    })

    it('should navigate to the recommended list', async () => {
        await HomePage.navigateToRecommendedList();
        const item = await RecommendedPage.firstItemFromList(1);
        await expect(item).toBeExisting();
    })
})

