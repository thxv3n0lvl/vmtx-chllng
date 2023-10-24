import { $ } from '@wdio/globals'
import { findByVisibleText } from '../helpers/selectors.js';

class HomePage {
    recommendedOption () {
        return $(findByVisibleText("Recommended"));
    }

    albumsOption () {
        return $(findByVisibleText("Albums"));
    }

    navigateToRecommendedList() {
        return this.recommendedOption().click();
    }
}

export default new HomePage();
