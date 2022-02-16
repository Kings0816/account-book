import { useRecoilValue } from 'recoil';

import { transactionsInDateState } from '../recoil/date/selector';

import { calculateIncome, calculateExpenditure } from '../utils/common/calculate-cost';

export const useTransactionSummary = () => {
    const transactions = useRecoilValue(transactionsInDateState);

    const transactionCount = transactions.length;
    const monthIncome = calculateIncome(transactions);
    const monthExpenditure = calculateExpenditure(transactions);
    const total = monthIncome - monthExpenditure;

    return { transactions, transactionCount, monthIncome, monthExpenditure, total };
};
