import React from 'react';
import { render, screen } from '../../../test-utils';
import moment from 'moment';

import Week from './index';

const CURRENT_DATE = { month: 1 };
const BASE_DAY = moment('2022-01-01');
const SECOND_WEEK = 2;
const DAILY_TRANSACTION = new Map();
const DAYS_IN_SECOND_WEEK = [2, 3, 4, 5, 6, 7, 8];

describe('해당하는 주의 날들(7일)을 표시하는 Week 컴포넌트 테스트', () => {
    it('주어진 week에 해당하는 일자가 표시된다.', () => {
        render(
            <table>
                <tbody>
                    <Week
                        currentDate={CURRENT_DATE}
                        baseDay={BASE_DAY}
                        currentWeek={SECOND_WEEK}
                        dailyTransactions={DAILY_TRANSACTION}
                    />
                </tbody>
            </table>,
        );

        DAYS_IN_SECOND_WEEK.forEach((day) => {
            expect(screen.getByText(day)).toBeInTheDocument();
        });
    });
});
