import React from 'react';
import { RecoilRoot } from 'recoil';
import { render, screen, waitFor } from '../../test-utils';
import '@testing-library/jest-dom';

import Transactions from '.';
import { checkState } from '../../recoil/check/atom';
import { transactions } from '../../mocks/transactions';

const TOTAL_COUNT = transactions.length;
const INCOME_COUNT = transactions.filter((transaction) => transaction.sign === '+').length;
const EXPENDITURE_COUNT = transactions.filter((transaction) => transaction.sign === '-').length;

describe('해당 날짜(월 단위)의 모든 거래내역을 표시하는 Transactions 컴포넌트 테스트', () => {
    const initializeState =
        (value) =>
        ({ set }) => {
            set(checkState, {
                totalCount: value.totalCount,
                income: value.income,
                expenditure: value.expenditure,
            });
        };

    it('지출 내역의 check box 상태가 false인 경우 지출 내역이 필터링되어 표시된다.', async () => {
        const TEST_DATA = {
            totalCount: true,
            income: true,
            expenditure: false,
        };
        render(
            <RecoilRoot initializeState={initializeState(TEST_DATA)}>
                <Transactions />
            </RecoilRoot>,
        );

        const filterdTransactions = await screen.findAllByRole('listitem');
        const result = TOTAL_COUNT - EXPENDITURE_COUNT;
        expect(filterdTransactions).toHaveLength(result);
    });

    it('수입 내역의 check box 상태가 false인 경우 수입 내역이 필터링되어 표시된다.', async () => {
        const TEST_DATA = {
            totalCount: true,
            income: false,
            expenditure: true,
        };
        render(
            <RecoilRoot initializeState={initializeState(TEST_DATA)}>
                <Transactions />
            </RecoilRoot>,
        );

        const filterdTransactions = await screen.findAllByRole('listitem');
        const result = TOTAL_COUNT - INCOME_COUNT;
        expect(filterdTransactions).toHaveLength(result);
    });

    it('지출, 수입 내역의 check box 상태가 false인 경우 0건이 표시된다.', async () => {
        const TEST_DATA = {
            totalCount: true,
            income: false,
            expenditure: false,
        };
        render(
            <RecoilRoot initializeState={initializeState(TEST_DATA)}>
                <Transactions />
            </RecoilRoot>,
        );

        const filterdTransactions = await waitFor(() => screen.queryAllByRole('listitem'));
        const result = TOTAL_COUNT - INCOME_COUNT - EXPENDITURE_COUNT;
        expect(filterdTransactions).toHaveLength(result);
    });
});
