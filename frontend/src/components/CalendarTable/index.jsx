import React from 'react';
import { useRecoilValue } from 'recoil';
import moment from 'moment';
import { nanoid } from 'nanoid';

import Week from './Week';
import { dateState } from '../../recoil/date/atom';
import { transactionsInDateState } from '../../recoil/date/selector';
import { WEEK_DAY } from '../../utils/constant/week';
import { makeDailyTransaction } from '../../utils/common/make-daily-transaction';
import { calculateIncome, calculateExpenditure } from '../../utils/common/calculate-cost';
import { DayBar, DayBox, MonthContainer, Footer, SummaryRow } from './style';

const OVER_WEEK = 53;

const CalendarTable = () => {
    const currentDate = useRecoilValue(dateState);
    const rawTransactions = useRecoilValue(transactionsInDateState);
    const dailyTransactions = makeDailyTransaction(rawTransactions);

    const income = calculateIncome(rawTransactions);
    const expenditure = calculateExpenditure(rawTransactions);
    const total = income - expenditure;

    const baseDay = moment(`${currentDate.year}-${currentDate.month}-1`);
    const firstWeek = baseDay.clone().startOf('month').week();
    const preLastWeek = baseDay.clone().endOf('month').week();
    const lastWeek = preLastWeek === 1 ? OVER_WEEK : preLastWeek;

    const makeWeeks = () => {
        let result = [];
        for (let currentWeek = firstWeek; currentWeek <= lastWeek; currentWeek += 1) {
            result = result.concat(
                <Week
                    key={currentWeek}
                    baseDay={baseDay}
                    currentWeek={currentWeek}
                    dailyTransactions={dailyTransactions}
                />,
            );
        }
        return result;
    };

    const dayHeaders = WEEK_DAY.map((day) => <th key={nanoid()}>{day}</th>);
    const weeks = makeWeeks();

    return (
        <>
            <DayBar>
                <DayBox>{dayHeaders}</DayBox>
            </DayBar>
            <MonthContainer>{weeks}</MonthContainer>
            <Footer>
                <SummaryRow>
                    <td>
                        <span>총 수입 {parseInt(income).toLocaleString()} </span>
                        <span>총 지출 {parseInt(expenditure).toLocaleString()}</span>
                    </td>
                    <td>총계 {parseInt(total).toLocaleString()}</td>
                </SummaryRow>
            </Footer>
        </>
    );
};

export default CalendarTable;
