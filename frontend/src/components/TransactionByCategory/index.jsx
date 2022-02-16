import React from 'react';
import { nanoid } from 'nanoid';

import DailyTransaction from '../DailyTransaction';
import TransactionModal from '../TransactionModal';
import { makeDailyTransaction } from '../../utils/common/make-daily-transaction';
import { TransactionsContainer } from './style';

const TransactionByCategory = ({ transactions }) => {
    const dailyTransactions = makeDailyTransaction(transactions);

    const shapedTransactions = Array.from(dailyTransactions.keys())
        .sort((a, b) => new Date(b) - new Date(a))
        .map((date) => (
            <DailyTransaction
                key={nanoid()}
                date={date}
                transactions={dailyTransactions.get(date)}
            />
        ));

    // TODO 해당 컴포넌트에는 모달을 넣지않았음(체크하기), 기존 컴포넌트와 적용되는 style의 차이있음
    return (
        <>
            <TransactionsContainer width={75}>{shapedTransactions}</TransactionsContainer>
            <TransactionModal />
        </>
    );
};

export default TransactionByCategory;
