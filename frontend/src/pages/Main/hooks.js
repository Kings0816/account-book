import { useSetRecoilState } from 'recoil';

import { getMethods } from '../../lib/method';
import { methodState } from '../../recoil/method/atom';

export const usefetchMethods = () => {
    const setMethod = useSetRecoilState(methodState);

    const fetchMethods = async () => {
        const result = await getMethods();
        result && setMethod(result.data);
    };

    return [fetchMethods];
};
