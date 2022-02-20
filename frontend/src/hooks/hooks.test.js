import React from 'react';
import { RecoilRoot } from 'recoil';
import { renderHook } from '@testing-library/react-hooks';

import { useTransactionSummary } from './useTransactionSummary';
import { dateState } from '../recoil/date/atom';
import { transactionsWithDate } from '../mocks/transactions';

const TEST_TRASACTION_DATA = transactionsWithDate['2022-1'];

describe('Custom hooks 테스트', () => {
    const initializeState = ({ set }) => {
        set(dateState, {
            year: 2022,
            month: 1,
        });
    };

    const Wrapper = ({ children }) => {
        return <RecoilRoot initializeState={initializeState}>{children}</RecoilRoot>;
    };

    it('useTransactionSummary - 현재 날짜에 해당하는 거래내역의 리스트, 개수, 수입, 총계를 반환한다.', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useTransactionSummary(), {
            wrapper: Wrapper,
        });
        await waitForNextUpdate();
        expect(result.current.transactions).toEqual(TEST_TRASACTION_DATA);
        expect(result.current.transactionCount).toEqual(TEST_TRASACTION_DATA.length);
        expect(result.current.monthIncome).toEqual(0);
        expect(result.current.monthExpenditure).toEqual(16200);
        expect(result.current.total).toEqual(-16200);
    });
});
