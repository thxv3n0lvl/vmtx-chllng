import { $ } from '@wdio/globals'
import { findByRecyclerIndex } from '../helpers/selectors.js';

class RecommendedPage {
	firstItemFromList(index: number){
		return $(findByRecyclerIndex(index));
	}
}

export default new RecommendedPage();
