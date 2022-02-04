import React from 'react';
import { useRecoilValue } from 'recoil';
import { nanoid } from 'nanoid';

import DailyTransaction from '../DailyTransaction';
import { useFilterdTransactions } from './hooks';
import { checkState } from '../../recoil/check/atom';
import { TransactionsContainer } from './style';

const Transactions = () => {
    const check = useRecoilValue(checkState);
    const filterdTransactions = useFilterdTransactions(check);

    const dailyTransactions = new Map();

    filterdTransactions.forEach((rawTransaction) => {
        const currentDate = rawTransaction.date;
        if (dailyTransactions.has(currentDate)) {
            dailyTransactions.get(currentDate).push(rawTransaction);
        } else dailyTransactions.set(currentDate, [rawTransaction]);
    });

    const shapedTransactions = Array.from(dailyTransactions.keys())
        .sort((a, b) => new Date(b) - new Date(a))
        .map((date) => (
            <DailyTransaction
                key={nanoid()}
                date={date}
                transactions={dailyTransactions.get(date)}
            />
        ));

    return <TransactionsContainer>{shapedTransactions}</TransactionsContainer>;
};

export default Transactions;
