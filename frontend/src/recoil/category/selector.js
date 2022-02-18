import { selectorFamily } from 'recoil';

import { categoryState } from './atom';

export const filteredCategoryState = selectorFamily({
    key: 'filteredCategoryState',
    get:
        (sign) =>
        ({ get }) => {
            const categories = get(categoryState);
            const filterdCategories = categories.filter((category) => category.sign === sign);
            return filterdCategories;
        },
});
