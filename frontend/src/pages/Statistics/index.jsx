import React, { Suspense } from 'react';

import Donut from '../../components/Donut';
import StatisticsContent from '../../components/StatisticsContent';
import Transactions from '../../components/Transactions';
import EmptyBox from '../../components/EmptyBox';
import { useModal } from '../../hooks/useModal';
import { useTransactionByCategory } from './hooks';
import { MainWrapper, DonutBox } from './style';

const Statistics = () => {
    const { getOpenModalByName } = useModal();
    const { transactionsByCategory, expenditures } = useTransactionByCategory();

    const categoryTransaction = getOpenModalByName('categoryTransaction');

    return (
        <MainWrapper>
            <Suspense fallback={<div>Loading...</div>}>
                {expenditures !== 0 ? (
                    <DonutBox data-testid="donut">
                        <Donut transactionsByCategory={transactionsByCategory} />
                        <StatisticsContent transactionsByCategory={transactionsByCategory} />
                    </DonutBox>
                ) : (
                    <EmptyBox />
                )}
            </Suspense>
            {categoryTransaction ? (
                <Transactions transactions={categoryTransaction.props} width={75} />
            ) : null}
        </MainWrapper>
    );
};

export default Statistics;
