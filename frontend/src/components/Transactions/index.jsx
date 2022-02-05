import React from 'react';
import { useRecoilValue } from 'recoil';
import { nanoid } from 'nanoid';

import DailyTransaction from '../DailyTransaction';
import TransactionModal from '../TransactionModal';
import { useFilterdTransactions } from './hooks';
import { checkState } from '../../recoil/check/atom';
import { TransactionsContainer } from './style';
import { makeDailyTransaction } from '../../utils/common/make-daily-transaction';

const Transactions = () => {
    const check = useRecoilValue(checkState);
    const filterdTransactions = useFilterdTransactions(check);
    const dailyTransactions = makeDailyTransaction(filterdTransactions);

    const shapedTransactions = Array.from(dailyTransactions.keys())
        .sort((a, b) => new Date(b) - new Date(a))
        .map((date) => (
            <DailyTransaction
                key={nanoid()}
                date={date}
                transactions={dailyTransactions.get(date)}
            />
        ));

    return (
        <>
            <TransactionsContainer>{shapedTransactions}</TransactionsContainer>
            <TransactionModal />
        </>
    );
};

export default Transactions;
