import React from 'react';
import { nanoid } from 'nanoid';

import DailyTransaction from '../DailyTransaction';
import TransactionModal from '../TransactionModal';
import { TransactionsContainer } from './style';
import { makeDailyTransaction } from '../../utils/common/make-daily-transaction';

const Transactions = ({ transactions, width }) => {
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

    return (
        <>
            <TransactionsContainer width={width}>{shapedTransactions}</TransactionsContainer>
            <TransactionModal />
        </>
    );
};

export default Transactions;
