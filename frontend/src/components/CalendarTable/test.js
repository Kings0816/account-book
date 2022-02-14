import React from 'react';
import { RecoilRoot } from 'recoil';
import { render, screen } from '../../test-utils';
import { renderHook } from '@testing-library/react-hooks';

import CalendarTable from './index';
import { useWeek, useCost } from './hooks';
import { dateState } from '../../recoil/date/atom';
import { WEEK_DAY } from '../../utils/constant/week';
import { transactionsWithDate } from '../../mocks/transactions';
import { calculateIncome, calculateExpenditure } from '../../utils/common/calculate-cost';

const FIRST_WEEK = 1;
const LAST_WEEK = 6;
const INCOME = calculateIncome(transactionsWithDate['2022-1']);
const EXPENDITURE = calculateExpenditure(transactionsWithDate['2022-1']);
const TOTAL = INCOME - EXPENDITURE;

describe('달력을 표시하는 CalendarTable 컴포넌트 테스트', () => {
    const initializeState = ({ set }) => {
        set(dateState, {
            year: 2022,
            month: 1,
        });
    };

    const Wrapper = ({ children }) => {
        return <RecoilRoot initializeState={initializeState}>{children}</RecoilRoot>;
    };

    it('head에 요일들이 표시된다.', () => {
        render(<CalendarTable />);

        WEEK_DAY.forEach(async (day) => {
            expect(await screen.findByText(day)).toBeInTheDocument();
        });
    });

    it('useWeek - 현재 날짜의 첫째 주와 마지막 주를 반환한다.', async () => {
        const { result } = renderHook(() => useWeek(), { wrapper: Wrapper });

        const { firstWeek, lastWeek } = result.current;
        expect(firstWeek).toEqual(FIRST_WEEK);
        expect(lastWeek).toEqual(LAST_WEEK);
    });

    it('useCost - 현재 날짜에 해당하는 거래내역의 수입, 지출, 총계를 반환한다.', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useCost(), { wrapper: Wrapper });

        await waitForNextUpdate();

        const { income, expenditure, total } = result.current;
        expect(income).toEqual(INCOME);
        expect(expenditure).toEqual(EXPENDITURE);
        expect(total).toEqual(TOTAL);
    });
});
