import React from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

import Summary from '../Summary';
import MonthTransaction from '../MonthTransaction';

import { MAX_MOBILE_DEVICE } from '../../utils/device-size';
import { entireTransaction } from '../../dummy/transaction';

const Transactions = () => {
    // TODO 이러한 상태에 대한 가공하는 부분은 recoil의 selector를 활용해보자!
    const currentDate = '2022-01';
    const [year, month] = currentDate.split('-');
    const rawTransactions = entireTransaction[currentDate];
    const shapedTransactions = Object.entries(rawTransactions).map(([day, transactions]) => (
        <MonthTransaction
            key={nanoid()}
            year={year}
            month={month}
            day={day}
            transactions={transactions}
        />
    ));

    return (
        <Wrapper>
            <Summary />
            <TransactionsContainer>{shapedTransactions}</TransactionsContainer>
        </Wrapper>
    );
};

export default Transactions;

const Wrapper = styled.div`
    width: calc(100vw - 15px);
    height: calc(100vh - 125px);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`;

const TransactionsContainer = styled.ul`
    margin-top: 20px;
    width: 100%;
    height: calc(100% - 150px);

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        max-height: calc(100% - 50px);
    }
`;
