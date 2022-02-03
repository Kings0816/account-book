import React from 'react';
import { render, screen } from '../../test-utils';
import '@testing-library/jest-dom';

import DailyTransaction from '.';

import { WEEK_DAY } from '../../utils/constant/week';

const TEST_DATE = '2022-1-28';
const TEST_DATA = [
    {
        category: '카페/간식',
        color: '#D092E2',
        content: '녹차 스무디',
        method: '현금',
        sign: '-',
        cost: '5700',
        date: '2022-01-28',
    },
    {
        category: '카페/간식',
        color: '#D092E2',
        content: '허니브레드',
        method: '현금',
        sign: '-',
        cost: '5300',
        date: '2022-01-28',
    },
    {
        category: '카페/간식',
        color: '#D092E2',
        content: '민트초코라떼',
        method: '현금',
        sign: '-',
        cost: '5200',
        date: '2022-01-28',
    },
    {
        category: '용돈',
        color: '#E6D267',
        content: '명절 보너스',
        method: '토스',
        sign: '+',
        cost: '300000',
        date: '2022-01-28',
    },
];

describe('하루 단위의 transactions에 대한 DailyTransaction 컴포넌트 테스트', () => {
    it('props로 내려온 날짜에 해당하는 (월, 일, 요일)이 표시된다.', () => {
        render(<DailyTransaction date={TEST_DATE} transactions={TEST_DATA} />);

        const [year, month, day] = TEST_DATE.split('-');
        const week = new Date(year, month, day).getDay();
        const weekDay = WEEK_DAY[week];
        const dateSpan = screen.getByTestId('date');

        expect(dateSpan).toHaveTextContent(`1월 28일 ${weekDay}`);
    });
});
