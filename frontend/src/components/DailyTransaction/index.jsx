import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import Transaction from '../Transaction';

import { dayInfo } from '../../utils/common/day-info';
import { calculateIncome, calculateExpenditure } from '../../utils/common/calculate-cost';

import { DailyInfo } from './style';

const DailyTransaction = ({ date, transactions }) => {
    const { month, day, weekDay } = dayInfo(date);

    const dailyIncome = calculateIncome(transactions);
    const dailyExpenditure = calculateExpenditure(transactions);

    const dailyTransactions = transactions.map((transaction) => (
        <Transaction key={nanoid()} transaction={transaction} />
    ));

    if (transactions.length === 0) return null;

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
    date: PropTypes.string.isRequired,
    transactions: PropTypes.array.isRequired,
};

export default DailyTransaction;
