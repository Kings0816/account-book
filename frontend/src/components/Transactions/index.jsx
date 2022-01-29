import React from 'react';
import { useRecoilValue } from 'recoil';
import { nanoid } from 'nanoid';

import DailyTransaction from '../DailyTransaction';

import { dateState } from '../../recoil/date/atom';
import { getTransactionsInDateState } from '../../recoil/transaction/selector';

import { TransactionsContainer } from './style';

const Transactions = () => {
    const { year, month } = useRecoilValue(dateState);
    const rawTransactions = useRecoilValue(getTransactionsInDateState);

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
