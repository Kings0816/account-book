import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '../../test-utils';
import '@testing-library/jest-dom';

import TransactionModal from '.';
import { modalState } from '../../recoil/modal/atom';
import theme from '../../styles/theme';

const TEST_DATA = {
    category: '카페/간식',
    color: '#D092E2',
    content: '녹차 스무디',
    method: '현금',
    sign: '-',
    cost: '5700',
    date: '2022-01-28',
};

describe('TransactionModal 컴포넌트 테스트', () => {
    const initializeState = ({ set }) => {
        set(modalState, [
            {
                name: 'transaction',
                props: TEST_DATA,
            },
        ]);
    };

    it('배경 Dim, 입력 폼이 표시된다.', () => {
        render(
            <RecoilRoot initializeState={initializeState}>
                <ThemeProvider theme={theme}>
                    <TransactionModal />
                </ThemeProvider>
            </RecoilRoot>,
        );

        const BackgroundDim = screen.getByTestId('dim');
        const transactionForm = screen.getByRole('form', { name: /transaction/i });
        expect(BackgroundDim).toBeInTheDocument();
        expect(transactionForm).toBeInTheDocument();
    });

    it('현재 선택된 modal의 props 속성이 없으면 모달이 표시되지 않는다.', () => {
        render(<TransactionModal />);
        const modalDiv = screen.queryByTestId('modal');
        expect(modalDiv).not.toBeInTheDocument();
    });
});
