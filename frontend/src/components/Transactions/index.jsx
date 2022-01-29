import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { nanoid } from 'nanoid';

import DailyTransaction from '../DailyTransaction';

import { dateState } from '../../recoil/date/atom';
import { getTransactionsInDateState } from '../../recoil/transaction/selector';

import { MAX_MOBILE_DEVICE } from '../../utils/constant/device-size';

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

const TransactionsContainer = styled.ul`
    margin-top: 20px;
    width: 100%;
    height: calc(100% - 150px);

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        max-height: calc(100% - 50px);
    }
`;
