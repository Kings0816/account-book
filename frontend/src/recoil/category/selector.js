import { selector } from 'recoil';

import { categoryState } from './atom';

export const filteredCategoryState = selector({
    key: 'filteredCategoryState',
    get: ({ get }) => {
        const categories = get(categoryState);
        const filterdCategories = categories.filter((category) => category.sign === '-');
        return filterdCategories;
    },
});
