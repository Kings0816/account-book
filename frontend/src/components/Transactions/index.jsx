import React from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

import DailyTransaction from '../DailyTransaction';

import { MAX_MOBILE_DEVICE } from '../../utils/device-size';
import { entireTransaction } from '../../dummy/transaction';

const Transactions = () => {
    // TODO 이러한 상태에 대한 가공하는 부분은 recoil의 selector를 활용해보자!
    const currentDate = '2022-01';
    const [year, month] = currentDate.split('-');
    const rawTransactions = entireTransaction[currentDate];
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

const TransactionsContainer = styled.ul`
    margin-top: 20px;
    width: 100%;
    height: calc(100% - 150px);

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        max-height: calc(100% - 50px);
    }
`;
