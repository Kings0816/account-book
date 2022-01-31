import React from 'react';
import { useRecoilValue } from 'recoil';
import { nanoid } from 'nanoid';

import DailyTransaction from '../DailyTransaction';

import { transactionsInDateState } from '../../recoil/date/selector';

import { TransactionsContainer } from './style';

const Transactions = () => {
    const rawTransactions = useRecoilValue(transactionsInDateState);

    const dailyTransactions = new Map();

    rawTransactions.forEach((rawTransaction) => {
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
