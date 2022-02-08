import { useSetRecoilState } from 'recoil';

import { getMethods } from '../../lib/method';
import { getCategories } from '../../lib/category';
import { methodState } from '../../recoil/method/atom';
import { categoryState } from '../../recoil/category/atom';

export const usefetchMethodAndCategory = () => {
    const setMethod = useSetRecoilState(methodState);
    const setCategory = useSetRecoilState(categoryState);

    const fetchMethod = async () => {
        const result = await getMethods();
        result && setMethod(result.data);
    };

    const fetchCategory = async () => {
        const result = await getCategories();
        result && setCategory(result.data);
    };

    return [fetchMethod, fetchCategory];
};
