import { useSetRecoilState } from 'recoil';

import { categoryState } from '../../recoil/category/atom';
import { createCategory } from '../../lib/category';

export const useCategory = (closeModal) => {
    const setCategories = useSetRecoilState(categoryState);

    const addCategory = async (name, color, sign) => {
        const newCategory = await createCategory(name, color, sign);
        newCategory && setCategories(newCategory);
        closeModal('createCategory');
    };

    return { addCategory };
};
