import React from 'react';
import { useRecoilValue } from 'recoil';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { checkState } from '../../recoil/check/atom';

import Transaction from '../Transaction';

import { calculateIncome, calculateExpenditure } from '../../utils/common/calculate-cost';
import { WEEK_DAY } from '../../utils/constant/week';

import { DailyInfo } from './style';

const DailyTransaction = ({ date, transactions }) => {
    const check = useRecoilValue(checkState);

    const [year, month, day] = date.split('-');
    const week = new Date(year, month, day).getDay();
    const weekDay = WEEK_DAY[week];

    let filterdTransactions = !check.income
        ? transactions.filter((transaction) => transaction.sign !== '+')
        : transactions;

    filterdTransactions = !check.expenditure
        ? filterdTransactions.filter((transaction) => transaction.sign !== '-')
        : filterdTransactions;

    const dailyIncome = calculateIncome(filterdTransactions);
    const dailyExpenditure = calculateExpenditure(filterdTransactions);

    const dailyTransactions = filterdTransactions.map((transaction) => (
        <Transaction key={nanoid()} transaction={transaction} />
    ));

    if (filterdTransactions.length === 0) return null;

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
