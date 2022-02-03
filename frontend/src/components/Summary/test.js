import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import theme from '../../styles/theme';
import Summary from '.';

const AllTheProviders = ({ children }) => {
    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
            </ThemeProvider>
        </RecoilRoot>
    );
};

const customRender = (ui, options) => {
    return render(ui, { wrapper: AllTheProviders, ...options });
};

describe('메인 화면(지출입 내역) Summary 컴포넌트 테스트', () => {
    it('총 이체, 수입, 지출까지 3개의 체크박스가 표시된다.', async () => {
        customRender(<Summary />);

        const checkBoxes = await screen.findAllByRole('checkbox');

        expect(checkBoxes).toHaveLength(3);
    });

    it('현재 날짜에 해당하는 총 이체 건수가 정상적으로 표시된다.', async () => {
        customRender(<Summary />);

        const totalCountSpan = await screen.findByTestId('totalCount');

        expect(totalCountSpan).toHaveTextContent('14');
    });

    it('현재 날짜에 해당하는 수입이 정상적으로 표시된다.', async () => {
        customRender(<Summary />);

        const incomeSpan = await screen.findByTestId('income');

        expect(incomeSpan).toHaveTextContent('300,000');
    });

    it('현재 날짜에 해당하는 지출이 정상적으로 표시된다.', async () => {
        customRender(<Summary />);

        const expenditureSpan = await screen.findByTestId('expenditure');

        expect(expenditureSpan).toHaveTextContent('259,200');
    });
});
