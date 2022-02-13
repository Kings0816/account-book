import React, { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import moment from 'moment';

import Header from '../../components/Header';
import { dateState } from '../../recoil/date/atom';

const Calendar = () => {
    const currentDate = useRecoilValue(dateState);

    const baseDay = moment(`${currentDate.year}-${currentDate.month}-1`);
    const firstWeek = baseDay.clone().startOf('month').week();
    const preLastWeek = baseDay.clone().endOf('month').week();

    const OVER_WEEK = 53;
    const lastWeek = preLastWeek === 1 ? OVER_WEEK : preLastWeek;

    const WEEK_LENGTH = 7;
    const days = () => {
        let result = [];
        for (let currentWeek = firstWeek; currentWeek <= lastWeek; currentWeek += 1) {
            result = result.concat(
                <Week key={currentWeek}>
                    {Array(WEEK_LENGTH)
                        .fill()
                        .map((_, index) => {
                            const day = baseDay
                                .clone()
                                .startOf('year')
                                .week(currentWeek)
                                .startOf('week')
                                .add(index, 'days');
                            return (
                                <Day key={currentWeek + index}>
                                    <CostInDate>
                                        <span>3,880,000</span>
                                        <span>-2,700,000</span>
                                        <span>900,000</span>
                                    </CostInDate>
                                    <span>{day.format('D')}</span>
                                </Day>
                            );
                        })}
                </Week>,
            );
        }
        return result;
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Header current={'calendar'} />
            <MainWrapper>
                <DayBar>
                    <DayBox>
                        <th>일</th>
                        <th>월</th>
                        <th>화</th>
                        <th>수</th>
                        <th>목</th>
                        <th>금</th>
                        <th>토</th>
                    </DayBox>
                </DayBar>
                <MonthContainer>{days()}</MonthContainer>
            </MainWrapper>
        </Suspense>
    );
};

export default Calendar;

export const MainWrapper = styled.table`
    width: 100vw;
    height: calc(100vh - 125px);
    min-width: 228px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

// TODO scroll 시 헤더는 고정되도록 해보자
const DayBar = styled.thead`
    width: 60%;
    height: 53px;
    margin: -20px auto 0px;

    background: #fcfcfc;
    border: 1px solid #bbbbbb;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.1);
`;

const DayBox = styled.tr`
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const MonthContainer = styled.tbody`
    width: 60%;
    margin: 20px auto auto;

    tr:first-child {
        td:nth-child(1) {
            border-radius: 10px 0px 0px;
        }

        td:nth-child(7) {
            border-radius: 0px 10px 0px 0px;
        }
    }

    tr:last-child {
        td:nth-child(1) {
            border-radius: 0px 0px 0px 10px;
        }

        td:nth-child(7) {
            border-radius: 0px 0px 10px;
        }
    }
`;

const Week = styled.tr`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const Day = styled.td`
    width: calc(100% / 7);
    height: 12vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border: 0.5px solid #bbbbbb;
    text-align: end;
    font-size: 0.8rem;

    & > span:last-child {
        color: gray;
    }
`;

const CostInDate = styled.div`
    padding: 3px 0px 0px 3px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-weight: bold;

    & > span {
        &:nth-child(1) {
            color: blue;
        }
        &:nth-child(2) {
            color: red;
        }
        &:nth-child(3) {
            color: black;
        }
    }
`;
