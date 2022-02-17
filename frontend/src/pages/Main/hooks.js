import { useRecoilValue, useSetRecoilState } from 'recoil';

import { getMethods } from '../../lib/method';
import { getCategories } from '../../lib/category';
import { methodState } from '../../recoil/method/atom';
import { categoryState } from '../../recoil/category/atom';
import { transactionsInDateState } from '../../recoil/date/selector';

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

export const useFilterdTransactions = (check) => {
    const rawTransactions = useRecoilValue(transactionsInDateState);

    let filterdTransactions = !check.income
        ? rawTransactions.filter((transaction) => transaction.sign !== '+')
        : rawTransactions;

    filterdTransactions = !check.expenditure
        ? filterdTransactions.filter((transaction) => transaction.sign !== '-')
        : filterdTransactions;

    return filterdTransactions;
};
