import React from 'react';
import { useRecoilValue } from 'recoil';
import { nanoid } from 'nanoid';

import DailyTransaction from '../DailyTransaction';

import { dateState } from '../../recoil/date/atom';
import { transactionsInDateState } from '../../recoil/transaction/selector';

import { TransactionsContainer } from './style';

const Transactions = () => {
    const { year, month } = useRecoilValue(dateState);
    const rawTransactions = useRecoilValue(transactionsInDateState);

    const shapedTransactions = Object.entries(rawTransactions).map(([day, transactions]) => (
        <DailyTransaction
            key={nanoid()}
            year={year}
            month={month}
            day={day}
            transactions={transactions}
        />
    ));

    return <TransactionsContainer>{shapedTransactions}</TransactionsContainer>;
};

export default Transactions;
