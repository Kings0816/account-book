import React, { Suspense } from 'react';

import Header from '../../components/Header';
import Donut from '../../components/Donut';
import StatisticsContent from '../../components/StatisticsContent';
import { useTransactionByCategory } from './hooks';
import { MainWrapper, DonutBox } from './style';

const Statistics = () => {
    const { transactionsByCategory } = useTransactionByCategory();

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Header current={'statistics'} />
            <MainWrapper>
                <DonutBox>
                    <Donut transactionsByCategory={transactionsByCategory} />
                    <StatisticsContent transactionsByCategory={transactionsByCategory} />
                </DonutBox>
            </MainWrapper>
        </Suspense>
    );
};

export default Statistics;
