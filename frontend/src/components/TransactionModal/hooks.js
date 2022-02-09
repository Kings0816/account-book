import { useSetRecoilState } from 'recoil';

import { categoryState } from '../../recoil/category/atom';
import { createCategory } from '../../lib/category';

export const useCategory = (closeModal) => {
    const setCategories = useSetRecoilState(categoryState);

    const addCategory = async (category) => {
        const newCategory = await createCategory(category.name, category.color, category.sign);
        newCategory && setCategories(newCategory);
        closeModal('createCategory');
    };

    return { addCategory };
};
