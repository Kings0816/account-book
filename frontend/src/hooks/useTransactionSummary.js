import { useRecoilValue } from 'recoil';

import { transactionsInDateState } from '../recoil/transaction/selector';

import { calculateIncome, calculateExpenditure } from '../utils/common/calculate-cost';

export const useTransactionSummary = () => {
    const rawTransactions = useRecoilValue(transactionsInDateState);

    const transactionCount = Object.values(rawTransactions).reduce(
        (acc, transaction) => acc + transaction.length,
        0,
    );

    let monthIncome = 0;
    Object.values(rawTransactions).forEach((rawTransaction) => {
        monthIncome += calculateIncome(rawTransaction);
    });

    let monthExpenditure = 0;
    Object.values(rawTransactions).forEach((rawTransaction) => {
        monthExpenditure += calculateExpenditure(rawTransaction);
    });

    return [transactionCount, monthIncome, monthExpenditure];
};
