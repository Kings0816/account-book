import React, { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import moment from 'moment';

import Header from '../../components/Header';
import { dateState } from '../../recoil/date/atom';
import { WEEK_DAY } from '../../utils/constant/week';
import { MAX_MOBILE_DEVICE } from '../../utils/constant/device-size';

const OVER_WEEK = 53;
const WEEK_LENGTH = 7;

const Calendar = () => {
    const currentDate = useRecoilValue(dateState);

    const baseDay = moment(`${currentDate.year}-${currentDate.month}-1`);
    const firstWeek = baseDay.clone().startOf('month').week();
    const preLastWeek = baseDay.clone().endOf('month').week();

    const lastWeek = preLastWeek === 1 ? OVER_WEEK : preLastWeek;

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

    const dayHeaders = WEEK_DAY.map((day) => <th>{day}</th>);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Header current={'calendar'} />
            <MainWrapper>
                <DayBar>
                    <DayBox>{dayHeaders}</DayBox>
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
    min-height: 53px;
    margin: -20px auto 0px;

    background: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.brigtenL1Gray};
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.pale};

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        margin: 0px;
        width: 100%;

        border: none;
        border-radius: 0px;
    }
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

    border: 1px solid ${({ theme }) => theme.color.brigtenL1Gray};
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.thick};

    tr:last-child {
        border-bottom: 0px;
    }

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        margin: 10px 0px 0px 0px;
        width: 100%;

        border: none;
        border-radius: 0px;
        box-shadow: none;

        tr:last-child {
            border-bottom: 0.5px solid ${({ theme }) => theme.color.brigtenL1Gray};
        }
    }
`;

const Week = styled.tr`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    box-sizing: border-box;
    border-bottom: 0.5px solid ${({ theme }) => theme.color.brigtenL1Gray};

    td:last-child {
        border-right: 0px;
    }

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        margin-bottom: 10px;

        border-top: 0.5px solid ${({ theme }) => theme.color.brigtenL1Gray};
    }
`;

const Day = styled.td`
    width: calc(100% / 7);
    height: 12vh;
    min-height: 75px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    text-align: end;
    box-sizing: border-box;
    border-right: 0.5px solid ${({ theme }) => theme.color.brigtenL1Gray};
    font-size: ${({ theme }) => theme.fontSize.mini};

    & > span:last-child {
        padding: 0px 7px 7px 0px;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        color: ${({ theme }) => theme.color.gray};
    }
`;

const CostInDate = styled.div`
    width: 100%;
    padding: 7px 7px 0px 0px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    font-weight: bold;

    box-sizing: border-box;

    & > span {
        width: 90%;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        &:nth-child(1) {
            color: ${({ theme }) => theme.color.blue};
        }
        &:nth-child(2) {
            color: ${({ theme }) => theme.color.red};
        }
        &:nth-child(3) {
            color: ${({ theme }) => theme.color.black};
        }
    }
`;
