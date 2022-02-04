import { useRecoilValue } from 'recoil';

import { transactionsInDateState } from '../../recoil/date/selector';

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
