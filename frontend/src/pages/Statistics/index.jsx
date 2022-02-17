import React, { Suspense } from 'react';

import Header from '../../components/Header';
import Donut from '../../components/Donut';
import StatisticsContent from '../../components/StatisticsContent';
import Transactions from '../../components/Transactions';
import { useModal } from '../../hooks/useModal';
import { useTransactionByCategory } from './hooks';
import { MainWrapper, DonutBox, EmptyBox, Logo } from './style';
import emptyImg from '../../../public/assets/empty.svg';

const Statistics = () => {
    const { getOpenModalByName } = useModal();
    const { transactionsByCategory, expenditures } = useTransactionByCategory();

    const categoryTransaction = getOpenModalByName('categoryTransaction');

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Header current={'statistics'} />
            <MainWrapper>
                {expenditures !== 0 ? (
                    <DonutBox data-testid="donut">
                        <Donut transactionsByCategory={transactionsByCategory} />
                        <StatisticsContent transactionsByCategory={transactionsByCategory} />
                    </DonutBox>
                ) : (
                    <EmptyBox>
                        <Logo aria-label="empty" src={emptyImg} />
                    </EmptyBox>
                )}
                {categoryTransaction ? (
                    <Transactions transactions={categoryTransaction.props} width={75} />
                ) : null}
            </MainWrapper>
        </Suspense>
    );
};

export default Statistics;
