import { useRecoilValue } from 'recoil';

import { transactionsInDateState } from '../recoil/date/selector';

import { calculateIncome, calculateExpenditure } from '../utils/common/calculate-cost';

export const useTransactionSummary = () => {
    const rawTransactions = useRecoilValue(transactionsInDateState);

    const transactionCount = rawTransactions.length;
    const monthIncome = calculateIncome(rawTransactions);
    const monthExpenditure = calculateExpenditure(rawTransactions);

    return [transactionCount, monthIncome, monthExpenditure];
};
