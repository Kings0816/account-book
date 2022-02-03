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
});
