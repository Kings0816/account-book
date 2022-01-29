import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import Transaction from '../Transaction';

import { calculateIncome, calculateExpenditure } from '../../utils/common/calculate-cost';
import { WEEK_DAY } from '../../utils/constant/week';

import { DailyInfo } from './style';

const DailyTransaction = ({ year, month, day, transactions }) => {
    const week = new Date(year, month - 1, day).getDay();
    const weekDay = WEEK_DAY[week];

    const dailyIncome = calculateIncome(transactions);
    const dailyExpenditure = calculateExpenditure(transactions);

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
