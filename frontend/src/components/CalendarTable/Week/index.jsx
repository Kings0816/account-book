import React from 'react';

import Day from '../Day';
import { Wrapper } from './style';

const WEEK_LENGTH = 7;

const Week = ({ currentDate, baseDay, currentWeek, dailyTransactions }) => {
    const days = Array(WEEK_LENGTH)
        .fill()
        .map((_, index) => {
            const day = baseDay
                .clone()
                .startOf('year')
                .week(currentWeek)
                .startOf('week')
                .add(index, 'days');
            return (
                <Day
                    key={currentWeek + index}
                    day={day}
                    transactions={dailyTransactions.get(day.format('YYYY-MM-DD'))}
                    isInMonth={day.format('M') === String(currentDate.month)}
                />
            );
        });

    return <Wrapper>{days}</Wrapper>;
};

export default Week;
