import React from 'react';
import { useRecoilValue } from 'recoil';
import { nanoid } from 'nanoid';

import Week from './Week';
import { transactionsInDateState } from '../../recoil/date/selector';
import { WEEK_DAY } from '../../utils/constant/week';
import { makeDailyTransaction } from '../../utils/common/make-daily-transaction';
import { useWeek, useCost } from './hooks';
import { DayBar, DayBox, MonthContainer, Footer, SummaryRow } from './style';

const CalendarTable = () => {
    const { baseDay, firstWeek, lastWeek } = useWeek();
    const { income, expenditure, total } = useCost();
    const rawTransactions = useRecoilValue(transactionsInDateState);
    const dailyTransactions = makeDailyTransaction(rawTransactions);

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
