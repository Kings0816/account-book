import React from 'react';
import { useRecoilValue } from 'recoil';
import moment from 'moment';
import { nanoid } from 'nanoid';

import Week from './Week';
import { dateState } from '../../recoil/date/atom';
import { WEEK_DAY } from '../../utils/constant/week';
import { DayBar, DayBox, MonthContainer, Footer, SummaryRow } from './style';

const OVER_WEEK = 53;

const CalendarTable = () => {
    const currentDate = useRecoilValue(dateState);

    const baseDay = moment(`${currentDate.year}-${currentDate.month}-1`);
    const firstWeek = baseDay.clone().startOf('month').week();
    const preLastWeek = baseDay.clone().endOf('month').week();
    const lastWeek = preLastWeek === 1 ? OVER_WEEK : preLastWeek;

    const makeWeeks = () => {
        let result = [];
        for (let currentWeek = firstWeek; currentWeek <= lastWeek; currentWeek += 1) {
            result = result.concat(
                <Week key={currentWeek} baseDay={baseDay} currentWeek={currentWeek} />,
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
                        <span>총 수입 3,880,000 </span>
                        <span>총 지출 1,775,000</span>
                    </td>
                    <td>총계 2,105,000</td>
                </SummaryRow>
            </Footer>
        </>
    );
};

export default CalendarTable;
