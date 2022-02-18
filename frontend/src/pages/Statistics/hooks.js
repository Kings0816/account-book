import { useRecoilValue } from 'recoil';

import { useTransactionSummary } from '../../hooks/useTransactionSummary';
import { filteredCategoryState } from '../../recoil/category/selector';
import { calculateExpenditure } from '../../utils/common/calculate-cost';

const INCOME = '-';

export const useTransactionByCategory = () => {
    const categories = useRecoilValue(filteredCategoryState(INCOME));
    const { transactions, monthExpenditure } = useTransactionSummary();

    const transactionsByCategory = new Map();
    categories.forEach((category) => {
        const transactionsInCategory = transactions.filter(
            (transaction) => transaction.category === category.name,
        );
        const expenditureInCategory = calculateExpenditure(transactionsInCategory);
        const percent = (expenditureInCategory / monthExpenditure) * 100;
        transactionsByCategory.set(category, {
            transactions: transactionsInCategory,
            percent,
            expenditureInCategory,
        });
    });

    const expenditures = Array.from(transactionsByCategory.values()).reduce(
        (acc, value) => acc + value.expenditureInCategory,
        0,
    );

    return { transactionsByCategory, expenditures };
};
