import React from 'react';
import { RecoilRoot } from 'recoil';
import { renderHook } from '@testing-library/react-hooks';

import { useFilterdTransactions } from './hooks';
import { dateState } from '../../recoil/date/atom';
import { transactionsWithDate } from '../../mocks/transactions';

const TEST_TRANSACTION = transactionsWithDate['2022-1'];
const INCOME_TRANSACTION = TEST_TRANSACTION.filter((transaction) => transaction.sign === '+');
const EXPENDITURE_TRANSACTION = TEST_TRANSACTION.filter((transaction) => transaction.sign === '-');

describe('메인페이지에 사용되는 커스텀 hooks 테스트', () => {
    const initializeState = ({ set }) => {
        set(dateState, {
            year: 2022,
            month: 1,
        });
    };

    const Wrapper = ({ children }) => {
        return <RecoilRoot initializeState={initializeState}>{children}</RecoilRoot>;
    };

    it('useFilterdTransactions - 수입, 지출 체크가 true인 경우 모든 거래내역을 반환한다.', async () => {
        const TEST_CHECK = {
            income: true,
            expenditure: true,
        };
        const { result, waitForNextUpdate } = renderHook(() => useFilterdTransactions(TEST_CHECK), {
            wrapper: Wrapper,
        });
        await waitForNextUpdate();
        const { filterdTransactions } = result.current;
        expect(filterdTransactions).toEqual(TEST_TRANSACTION);
    });

    it('useFilterdTransactions - 수입 체크만 true인 경우 수입 거래내역만 반환한다.', async () => {
        const TEST_CHECK = {
            income: true,
            expenditure: false,
        };
        const { result, waitForNextUpdate } = renderHook(() => useFilterdTransactions(TEST_CHECK), {
            wrapper: Wrapper,
        });
        await waitForNextUpdate();
        const { filterdTransactions } = result.current;
        expect(filterdTransactions).toEqual(INCOME_TRANSACTION);
    });

    it('useFilterdTransactions - 지출 체크만 true인 경우 지출 거래내역만 반환한다.', async () => {
        const TEST_CHECK = {
            income: false,
            expenditure: true,
        };
        const { result, waitForNextUpdate } = renderHook(() => useFilterdTransactions(TEST_CHECK), {
            wrapper: Wrapper,
        });
        await waitForNextUpdate();
        const { filterdTransactions } = result.current;
        expect(filterdTransactions).toEqual(EXPENDITURE_TRANSACTION);
    });
});
