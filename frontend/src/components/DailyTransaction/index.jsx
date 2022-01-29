import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import Transaction from '../Transaction';

import { MAX_MOBILE_DEVICE } from '../../utils/device-size';
import { WEEK_DAY } from '../../utils/week';

const DailyTransaction = ({ year, month, day, transactions }) => {
    const week = new Date(year, month - 1, day).getDay();
    const weekDay = WEEK_DAY[week];

    const dailyIncome = transactions
        .filter((transaction) => transaction.sign === '+')
        .reduce((acc, transaction) => acc + parseInt(transaction.cost), 0);

    const dailyExpenditure = transactions
        .filter((transaction) => transaction.sign === '-')
        .reduce((acc, transaction) => acc + parseInt(transaction.cost), 0);

    const dailyTransactions = transactions.map((transaction) => (
        <Transaction key={nanoid()} transaction={transaction} />
    ));

    return (
        <>
            <DailyInfo>
                <span>
                    {month}월 {day}일 {weekDay}
                </span>
                <div>
                    {dailyIncome !== 0 ? (
                        <span>수입 {parseInt(dailyIncome).toLocaleString('ko-KR')}</span>
                    ) : null}
                    {dailyExpenditure !== 0 ? (
                        <span> 지출 {parseInt(dailyExpenditure).toLocaleString('ko-KR')}</span>
                    ) : null}
                </div>
            </DailyInfo>
            {dailyTransactions}
        </>
    );
};

DailyTransaction.propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    day: PropTypes.string.isRequired,
    transactions: PropTypes.array.isRequired,
};

export default DailyTransaction;

// TODO div 태그로 사용할 지 아니면 Transaction의 Wrapper와 유사하니 공통요소 추출할 지 체크
const DailyInfo = styled.div`
    width: 90%;
    margin: 0px auto;
    padding: 10px 0px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid #d7d7d7;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        margin: 0px 15px;

        font-size: ${({ theme }) => theme.fontSize.mini};
    }
`;
