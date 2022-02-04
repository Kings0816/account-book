import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import Transactions from '.';
import { checkState } from '../../recoil/check/atom';
import theme from '../../styles/theme';
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
        // TODO test-utils 파일과 합치기
        render(
            <RecoilRoot
                initializeState={initializeState({
                    totalCount: true,
                    income: true,
                    expenditure: false,
                })}
            >
                <ThemeProvider theme={theme}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Transactions />
                    </Suspense>
                </ThemeProvider>
            </RecoilRoot>,
        );

        const filterdTransactions = await screen.findAllByRole('listitem');

        const result = TOTAL_COUNT - EXPENDITURE_COUNT;
        expect(filterdTransactions).toHaveLength(result);
    });

    it('수입 내역의 check box 상태가 false인 경우 수입 내역이 필터링되어 표시된다.', async () => {
        // TODO test-utils 파일과 합치기
        render(
            <RecoilRoot
                initializeState={initializeState({
                    totalCount: true,
                    income: false,
                    expenditure: true,
                })}
            >
                <ThemeProvider theme={theme}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Transactions />
                    </Suspense>
                </ThemeProvider>
            </RecoilRoot>,
        );

        const filterdTransactions = await screen.findAllByRole('listitem');

        const result = TOTAL_COUNT - INCOME_COUNT;
        expect(filterdTransactions).toHaveLength(result);
    });

    it('지출, 수입 내역의 check box 상태가 false인 경우 0건이 표시된다.', async () => {
        // TODO test-utils 파일과 합치기
        render(
            <RecoilRoot
                initializeState={initializeState({
                    totalCount: true,
                    income: false,
                    expenditure: false,
                })}
            >
                <ThemeProvider theme={theme}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Transactions />
                    </Suspense>
                </ThemeProvider>
            </RecoilRoot>,
        );

        const filterdTransactions = await waitFor(() => screen.queryAllByRole('listitem'));

        const result = TOTAL_COUNT - INCOME_COUNT - EXPENDITURE_COUNT;
        expect(filterdTransactions).toHaveLength(result);
    });
});
