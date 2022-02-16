import React, { Suspense } from 'react';
import { useRecoilValue } from 'recoil';

import Header from '../../components/Header';
import Donut from '../../components/Donut';
import { useTransactionSummary } from '../../hooks/useTransactionSummary';
import { filteredCategoryState } from '../../recoil/category/selector';
import { calculateExpenditure } from '../../utils/common/calculate-cost';
import { MainWrapper } from './style';

const Statistics = () => {
    const categories = useRecoilValue(filteredCategoryState);
    const { transactions, monthExpenditure } = useTransactionSummary();

    const transactionsByCategory = new Map();
    categories.forEach((category) => {
        const transactionsInCategory = transactions.filter(
            (transaction) => transaction.category === category.name,
        );
        const expenditureInCategory = calculateExpenditure(transactionsInCategory);
        const percent = (expenditureInCategory / monthExpenditure) * 100;
        transactionsByCategory.set(category, { percent, expenditureInCategory });
    });

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Header current={'statistics'} />
            <MainWrapper>
                <Donut transactionsByCategory={transactionsByCategory} />
            </MainWrapper>
        </Suspense>
    );
};

export default Statistics;
