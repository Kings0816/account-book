import React from 'react';
import { nanoid } from 'nanoid';

import DailyTransaction from '../DailyTransaction';
import TransactionModal from '../TransactionModal';
import { TransactionsContainer, EmptyBox, Logo } from './style';
import { makeDailyTransaction } from '../../utils/common/make-daily-transaction';
import emptyImg from '../../../public/assets/empty.svg';

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
            {transactions.length !== 0 ? (
                <TransactionsContainer width={width}>{shapedTransactions}</TransactionsContainer>
            ) : (
                <EmptyBox>
                    <Logo src={emptyImg} />
                </EmptyBox>
            )}
            <TransactionModal />
        </>
    );
};

export default Transactions;
